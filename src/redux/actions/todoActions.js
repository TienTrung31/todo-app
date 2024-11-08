import { type } from "@testing-library/user-event/dist/type";

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const TOGGLE_TODO_FAILURE = 'TOGGLE_TODO_FAILURE';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const SET_FILTER_DATE = 'SET_FILTER_DATE';
export const CLEAR_FILTER_DATE = 'CLEAR_FILTER_DATE';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: todo
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: error
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id
});

export const deleteTodoSuccess = (id) => ({
    type: DELETE_TODO_SUCCESS,
    payload: id
});

export const deleteTodoFailure = (error) => ({
    type: DELETE_TODO_FAILURE,
    payload: error
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
});

export const toggleTodoSuccess = (id) => ({
    type: TOGGLE_TODO_SUCCESS,
    payload: id
});

export const toggleTodoFailure = (error) => ({
    type: TOGGLE_TODO_FAILURE,
    payload: error
});

export const updatedTodos = (todo) => ({
    type: UPDATE_TODO,
    payload: todo
});

export const updatedTodosSuccess = (todo) => ({
    type: UPDATE_TODO_SUCCESS,
    payload: todo
});

export const updatedTodosFailure = (error) => ({
    type: UPDATE_TODO_FAILURE,
    payload: error
});

export const fetchTodos = () => ({
    type: FETCH_TODOS
});

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos
});

export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: error
});

export const setFilterDate = (date) => ({
    type: SET_FILTER_DATE,
    payload: date
})

export const clearFilterDate = () => ({
    type: CLEAR_FILTER_DATE
});