# React-RocketJump

Rocketjump your react! Manage state and side effects like a breeze

[![Build Status](https://travis-ci.com/inmagik/react-rocketjump.svg?branch=master)](https://travis-ci.com/inmagik/react-rocketjump)
[![npm version](https://badge.fury.io/js/react-rocketjump.svg)](https://badge.fury.io/js/react-rocketjump)
[![codecov](https://codecov.io/gh/inmagik/react-rocketjump/branch/master/graph/badge.svg)](https://codecov.io/gh/inmagik/react-rocketjump)

React RocketJump is a flexible, customizable, extensible tool to help developers dealing with side effects and asynchronous code in React Applications

Benefits of using React RocketJump

- asynchronous code is managed locally in your components, without the need of a global state
- you can start a task and then cancel it before it completes
- the library detects when components are mounted or unmounted, so that no asynchronous code is run on unmounted components
- extensible (but already powerful) and composable ecosystem of plugins to manage the most common and challenging tasks

## Quick start

### Install

```shell
yarn add react-rocketjump
```

### Your first rocket jump!

```js
// (1) Define your customary fetching logic
function loadTodosFromApi(params) {
  let myHeaders = new Headers()

  let config = {
    method: 'GET',
    headers: new Headers(),
    body: params,
  }

  return fetch('https://myawesomehost/api/posts', config).then(response =>
    response.json()
  )
}

// (2) Import rocketjump (rj for friends)
import { rj } from 'react-rocketjump'

// (3) Create a RocketJump Object
export const TodosState = rj({
  effect: loadTodosFromApi,
})

// (4) And then use it in your component
import { useRj } from 'react-rocketjump'
const TodoList = props => {

  // Here we use object destructuring operators to rename actions
  //    this allows to avoid name clashes and to have more auto documented code

  const [{ todos }, { run: loadTodos }] = useRj(
    TodosState,
    (state, { getData }) => ({ todos: getData(state) }), // extract data from state
  )

  useEffect(() => {
    loadTodos()
  }, [loadTodos])

  if (todos === null) {
    // still loading
    return null
  }

  return <MyTodosList todos={todos} />
}
```

## Deep dive

The full documentation with many examples and detailed information is mantained at

[https://inmagik.github.io/react-rocketjump](https://inmagik.github.io/react-rocketjump)

Be sure to check it out!!

## Run example

You can find an example under [example](https://github.com/inmagik/react-rocketjump/tree/master/example), it's a simple REST todo app that uses the great [json-server](https://github.com/typicode/json-server) as fake API server.

To run it first clone the repo:

```shell
git clone git@github.com:inmagik/react-rocketjump.git
```

Then run:

```shell
yarn install
yarn run-example
```
