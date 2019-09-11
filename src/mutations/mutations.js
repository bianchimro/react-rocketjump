import createMakeRxObservable from '../createMakeRxObservable'
import { makeLibraryAction } from '../actionCreators'
import { exportEffectCaller } from '../sideEffectDescriptor'
import { RUN, SUCCESS, INIT } from '../actionTypes'
import combineReducers from '../combineReducers'
import { get } from '../helpers'

const MUTATION_PREFIX = `@MUTATION`

// Make the action creater that trigger a mutation side effects
function makeActionCreator(name, mutation) {
  const actionCreator = (...params) =>
    makeLibraryAction(`${MUTATION_PREFIX}/${name}/${RUN}`, ...params).withMeta({
      params,
    })
  return actionCreator
}

// Add specials rj mutations action creators to base rj action creators
function enhanceActionCreators(mutations, actionCreators) {
  return Object.keys(mutations).reduce((enhancedActionCreators, name) => {
    const mutation = mutations[name]
    const actionCreator = makeActionCreator(name, mutation)
    if (process.env.NODE_ENV !== 'production' && actionCreators[name]) {
      console.warn(
        `[react-rocketjump] @mutations WARNING the mutation [${name}] ` +
          `override a pre existing action creator this can leading to ` +
          `unexpected behaviors.`
      )
    }
    return {
      ...enhancedActionCreators,
      [name]: actionCreator,
    }
  }, actionCreators)
}

// enhance the basic reducer \w updater of mutations to rj root reducer
function enhanceReducer(mutations, reducer, actionCreators) {
  const handleMutationsReducers = Object.keys(mutations).reduce((all, name) => {
    const mutation = mutations[name]

    let update

    if (typeof mutation.updater === 'string') {
      const actionCreator = actionCreators[mutation.updater]
      if (typeof actionCreator !== 'function') {
        throw new Error(
          `[react-rocketjump] @mutations you provide a non existing ` +
            `action creator [${mutation.updater}] as updater for mutation [${name}].`
        )
      }
      update = (state, action) =>
        reducer(state, actionCreator(action.payload.data))
    } else if (typeof mutation.updater === 'function') {
      update = (state, action) => mutation.updater(state, action.payload.data)
    } else {
      throw new Error(
        '[react-rocketjump] @mutations you should provide at least ' +
          `an effect and an updater to mutation config [${name}].`
      )
    }

    const type = `${MUTATION_PREFIX}/${name}/${SUCCESS}`
    return {
      ...all,
      [type]: update,
    }
  }, {})

  return (prevState, action) => {
    if (handleMutationsReducers[action.type]) {
      return handleMutationsReducers[action.type](prevState, action)
    }
    return reducer(prevState, action)
  }
}

// Reducer for track the mutation state
function makeMutationReducer(mutation, name) {
  return (state, action) => {
    if (action.type === INIT) {
      return mutation.reducer(state, action)
    }
    const pieces = (action.type || '').split('/')
    if (pieces.length !== 3) {
      return state
    }
    if (pieces[0] === MUTATION_PREFIX && pieces[1] === name) {
      const decoupleType = pieces[2]
      return mutation.reducer(state, { ...action, type: decoupleType })
    }
    return state
  }
}

// Mutations reducer or null if no mutations has a reducer
function makeMutationsReducer(mutations) {
  const mutationsReducers = Object.keys(mutations).reduce((all, name) => {
    const mutation = mutations[name]

    if (typeof mutation.reducer !== 'function') {
      return all
    }
    return {
      ...all,
      [name]: makeMutationReducer(mutation, name),
    }
  }, {})

  if (Object.keys(mutationsReducers).length === 0) {
    return null
  }

  return combineReducers(mutationsReducers)
}

function enhanceMakeObservable(mutations, makeObservable) {
  const makeMutationsObsList = Object.keys(mutations).map(name => {
    const { effect, takeEffect, effectCaller } = mutations[name]
    const prefix = `${MUTATION_PREFIX}/${name}/`

    if (typeof effect !== 'function') {
      throw new Error(
        '[react-rocketjump] @mutations you should provide at least ' +
          `an effect and an updater to mutation config [${name}].`
      )
    }

    return createMakeRxObservable(
      {
        effect,
        takeEffect: takeEffect || 'every',
        effectPipeline: [],
        effectCaller,
      },
      prefix
    )
  })

  return (action$, ...params) => {
    let o$ = makeObservable(action$, ...params)
    o$ = makeMutationsObsList.reduce((o$, makeMutationObs) => {
      return makeMutationObs(o$, ...params)
    }, o$)
    return o$
  }
}

function createWithMutationsComputeState(computed) {
  const computedKeys = Object.keys(computed)
  const mutationsSelectors = computedKeys
    .filter(k => k.indexOf('@mutation') === 0)
    .reduce((selectors, k) => {
      // TODO: Check in DEV
      const path = k.substr(k.indexOf('.') + 1)
      return {
        ...selectors,
        [k]: state => get(state, path),
      }
    }, {})

  return function computeState(state, selectors) {
    return computedKeys.reduce((computedState, selectorName) => {
      const keyName = computed[selectorName]
      if (mutationsSelectors[selectorName]) {
        const mutationSelector = mutationsSelectors[selectorName]
        return {
          ...computedState,
          [keyName]: mutationSelector(state.mutations),
        }
      }
      const selector = selectors[selectorName]
      return {
        ...computedState,
        [keyName]: selector(state.root),
      }
    }, {})
  }
}

function enancheComputeState(hasMutationsState, computeState, computed) {
  if (!hasMutationsState) {
    return computeState
  }
  if (!computeState) {
    return state => state.root
  }
  const withMutationsComputeState = createWithMutationsComputeState(computed)
  return (state, selectors) => withMutationsComputeState(state, selectors)
}

export function checkMutationsConfig(rjConfig) {
  if (
    typeof rjConfig.mutations === 'object' &&
    rjConfig.mutations !== null &&
    typeof rjConfig.effect !== 'function'
  ) {
    throw new Error(
      '[react-rocketjump] @mutations must be defined along with effect, ' +
        'please check your config.'
    )
  }
}

function makeMutationExport(mutation) {
  if (mutation.effectCaller) {
    return {
      ...mutation,
      effectCaller: exportEffectCaller(undefined, mutation.effectCaller),
    }
  }
  return mutation
}

function makeMutationsExport(mutations) {
  return Object.keys(mutations).reduce(
    (mutationsExport, name) => ({
      ...mutationsExport,
      [name]: makeMutationExport(mutations[name]),
    }),
    {}
  )
}

export function enhanceMakeExportWithMutations(rjConfig, extendExport) {
  // Set mutations config
  if (rjConfig.mutations) {
    return {
      ...extendExport,
      mutations: makeMutationsExport(rjConfig.mutations),
    }
  }

  return extendExport
}

export function enhanceFinalExportWithMutations(rjObject) {
  const { mutations, computed, ...rjEnhancedObject } = rjObject
  if (!mutations) {
    return rjEnhancedObject
  }

  const {
    makeRxObservable,
    actionCreators,
    reducer,
    computeState,
  } = rjEnhancedObject

  const enhancedReducer = enhanceReducer(mutations, reducer, actionCreators)
  const mutationsReducer = makeMutationsReducer(mutations)

  let hasMutationsState
  let withMutationsReducer
  if (mutationsReducer === null) {
    hasMutationsState = false
    withMutationsReducer = enhancedReducer
  } else {
    hasMutationsState = true
    withMutationsReducer = combineReducers({
      root: enhancedReducer,
      mutations: mutationsReducer,
    })
  }

  return {
    ...rjEnhancedObject,
    computeState: enancheComputeState(
      hasMutationsState,
      computeState,
      computed
    ),
    reducer: withMutationsReducer,
    actionCreators: enhanceActionCreators(mutations, actionCreators),
    makeRxObservable: enhanceMakeObservable(mutations, makeRxObservable),
  }
}
