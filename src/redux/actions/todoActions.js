export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const SET_FILTER_DATE = 'SET_FILTER_DATE';
export const CLEAR_FILTER_DATE = 'CLEAR_FILTER_DATE';

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const fetchTodos = () => ({ type: FETCH_TODOS });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });
export const setFilterDate = (date) => ({ type: SET_FILTER_DATE, payload: date })
export const clearFilterDate = () => ({ type: CLEAR_FILTER_DATE });