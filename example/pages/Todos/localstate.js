import {
  rj,
  matchMutationType,
  PENDING,
  SUCCESS,
  FAILURE,
} from 'react-rocketjump'
import rjPlainList from 'react-rocketjump/plugins/plainList'
import request from 'superagent'

export const API_URL = 'http://localhost:9001'

const trackTypes = ['removeTodo', 'toggleTodo']
function mutationsBusyReducer(state = 0, action) {
  if (matchMutationType(action.type, trackTypes, PENDING)) {
    return state + 1
  }
  if (matchMutationType(action.type, trackTypes, [SUCCESS, FAILURE])) {
    return state - 1
  }
  return state
}

export const TodosListState = rj(rjPlainList(), {
  effect: () => request.get(`${API_URL}/todos`).then(({ body }) => body),
  mutations: {
    addStupidTodo: rj.mutation.single({
      effect: (todo) =>
        request
          .post(`${API_URL}/todos`)
          .send(todo)
          .then(({ body }) => body),
      updater: 'insertItem',
    }),
    removeTodo: rj.mutation.multi((todo) => todo.id, {
      effect: (todo) =>
        request.delete(`${API_URL}/todos/${todo.id}`).then(() => todo),
      updater: 'deleteItem',
    }),
    toggleTodo: rj.mutation.multi((todo) => todo.id, {
      effect: (todo) =>
        request
          .put(`${API_URL}/todos/${todo.id}`)
          .send({
            ...todo,
            done: !todo.done,
          })
          .then(({ body }) => body),
      updater: 'updateItem',
    }),
  },
  selectors: () => ({
    isBusy: (state) => state.busy > 0,
  }),
  combineReducers: {
    busy: mutationsBusyReducer,
  },
  computed: {
    busy: 'isBusy',
    adding: '@mutation.addStupidTodo.pending',
    deleting: '@mutation.removeTodo.pendings',
    updating: '@mutation.toggleTodo.pendings',
    todos: 'getData',
    loading: 'isPending',
  },
  name: 'MaTodos',
})
