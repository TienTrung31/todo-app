import { takeLatest, put, call } from 'redux-saga/effects';
import {
    FETCH_TODOS,
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    addTodoSuccess,
    addTodoFailure,
    deleteTodoSuccess,
    deleteTodoFailure,
    toggleTodoSuccess,
    toggleTodoFailure,
    updatedTodosSuccess,
    updatedTodosFailure,
    fetchTodosSuccess,
    fetchTodosFailure
} from '../actions/todoActions';

const storageAPI = {
    getTodos: () => {
        try {
            const todos = localStorage.getItem('todos');
            return todos ? JSON.parse(todos) : [];
        } catch (error) {
            throw new Error('Failed to load todos from localStorage');
        }
    },

    saveTodos: (todos) => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        } catch (error) {
            throw new Error('Failed to save todos to localStorage');
        }
    }
};

function* fetchTodosSaga() {
    try {
        const todos = yield call(storageAPI.getTodos);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

function* addTodoSaga(action) {
    try {
        const currentTodos = yield call(storageAPI.getTodos);
        const newTodo = {
            id: Date.now(),
            ...action.payload
        };
        const addTodos = [...currentTodos, newTodo];
        yield call(storageAPI.saveTodos, addTodos);
        yield put(addTodoSuccess(newTodo));
    } catch (error) {
        yield put(addTodoFailure(error.message));
    }
}

function* deleteTodoSaga(action) {
    try {
        const currentTodos = yield call(storageAPI.getTodos);
        const deleteTodos = currentTodos.filter(todo => todo.id !== action.payload.id);
        yield call(storageAPI.saveTodos, deleteTodos);
        yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

function* toggleTodoSaga(action) {
    try {
        const currentTodos = yield call(storageAPI.getTodos);
        const toggleTodos = currentTodos.map(todo =>
            todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
        );
        yield call(storageAPI.saveTodos, toggleTodos);
        yield put(toggleTodoSuccess(action.payload));
    } catch (error) {
        yield put(toggleTodoFailure(error.message));
    }
}

function* updatedTodosSaga(action) {
    try {
        const currentTodos = yield call(storageAPI.getTodos);
        const updatedTodos = currentTodos.map(todo =>
            todo.id === action.payload.id
                ? { ...todo, ...action.payload }
                : todo
        );
        yield call(storageAPI.saveTodos, updatedTodos);
        yield put(updatedTodosSuccess(action.payload));
    } catch (error) {
        yield put(updatedTodosFailure(error.message));
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodosSaga);
    yield takeLatest(ADD_TODO, addTodoSaga);
    yield takeLatest(DELETE_TODO, deleteTodoSaga);
    yield takeLatest(TOGGLE_TODO, toggleTodoSaga);
    yield takeLatest(UPDATE_TODO, updatedTodosSaga);
}