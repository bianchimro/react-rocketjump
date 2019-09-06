import { useCallback } from 'react'
import { rj, useRj } from 'react-rocketjump'
import rjPlainList from 'react-rocketjump/plugins/plainList'
import rjMap from 'react-rocketjump/plugins/map'
import request from 'superagent'

export const API_URL = 'http://localhost:9001'

export const Socio = rj(() => Promise.resolve(23))
export const TodosListState = rj(rjPlainList(), {
  effect: () => request.get(`${API_URL}/todos`).then(({ body }) => body),
  mutations: {
    addStupidTodo: rj.mutation.single({
      effect: todo =>
        request
          .post(`${API_URL}/todos`)
          .send(todo)
          .then(({ body }) => body),
      updater: 'insertItem',
    }),
    removeTodo: rj.mutation.multi(todo => todo.id, {
      effect: todo =>
        request.delete(`${API_URL}/todos/${todo.id}`).then(() => todo),
      updater: 'deleteItem',
    }),
    toggleTodo: rj.mutation.multi(todo => todo.id, {
      effect: todo =>
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
  computed: {
    todos: 'getData',
    loading: 'isPending',
  },
  name: 'FuckerTodos',
})

export const AddTodoState = rj({
  effect: todo =>
    request
      .post(`${API_URL}/todos`)
      .send(todo)
      .then(({ body }) => body),
  takeEffect: 'exhaust',
})

export const UpdateTodosState = rj(rjMap({ keepCompleted: false }), {
  actions: ({ runKey }) => ({
    updateTodo: todo => runKey(todo.id, todo),
  }),
  effect: (id, todo) =>
    request
      .put(`${API_URL}/todos/${id}`)
      .send(todo)
      .then(({ body }) => body),
})

export const DeleteTodoState = rj(rjMap({ keepCompleted: false }), {
  takeEffect: ['groupByExhaust', todo => todo.id],
  actions: ({ runKey }) => ({
    deleteTodo: todo => runKey(todo.id),
  }),
  effect: id =>
    request.delete(`${API_URL}/todos/${id}`).then(({ body }) => body),
})

export function useMaTodos() {
  const [
    { data: todos, pending: loading },
    {
      loadTodos,
      addStupidTodo,
      insertItem: appendTodo,
      updateItem: updateTodoInList,
      deleteItem: removeTodoFromList,
    },
  ] = useRj(TodosListState)

  const [{ pending: adding }, { run: addTodoOnServer }] = useRj(AddTodoState)
  const [{ updating }, { updateTodo }] = useRj(
    UpdateTodosState,
    (state, { getMapPendings }) => ({
      updating: getMapPendings(state),
    })
  )
  const [{ deleting }, { deleteTodo }] = useRj(
    DeleteTodoState,
    (state, { getMapPendings }) => ({
      deleting: getMapPendings(state),
    })
  )

  const addTodo = useCallback(
    todo => {
      addTodoOnServer.onSuccess(appendTodo).run(todo)
    },
    [addTodoOnServer, appendTodo]
  )

  const toggleTodo = useCallback(
    todo => {
      updateTodo.onSuccess(updateTodoInList).run({
        ...todo,
        done: !todo.done,
      })
    },
    [updateTodoInList, updateTodo]
  )

  const removeTodo = useCallback(
    todo => {
      deleteTodo
        .onSuccess(() => removeTodoFromList(todo))
        .run({
          ...todo,
          done: !todo.done,
        })
    },
    [removeTodoFromList, deleteTodo]
  )

  return [
    { todos, loading, updating, deleting, adding },
    { loadTodos, removeTodo, toggleTodo, addTodo, addStupidTodo },
  ]
}
