import * as actions from './types'


export const createTodo = (todoTitle) => (dispatch) => {
    dispatch({
        type: actions.NEW_TODO,
        payload: { todoTitle: todoTitle }
    })
}

export const removeTodo = (todoId) => (dispatch) => {
    dispatch({
        type: actions.REMOVE_TODO,
        payload: { todoId: todoId }
    })
}

export const checkTodo = (todoId) => (dispatch) => {
    dispatch({
        type: actions.CHECK_TODO,
        payload: { todoId: todoId }
    })
}

/*
Step 1
here we define all our actions
each action must has a type
then we dispatch this action to the store

hint:
    the payload nice to have small data as we can

note:
    we are using composition --> f(g(x)) ---> read about it

note:
    here we define the action inside the dispatch function, we momken nektbo bra 3ady as an object
*/