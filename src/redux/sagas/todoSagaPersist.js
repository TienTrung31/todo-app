import { takeLatest, put } from 'redux-saga/effects';
import {
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
    updatedTodosFailure
} from '../actions/todoActions';

function* addTodoSaga(action) {
    try {
        const newTodo = {
            id: Date.now(),
            ...action.payload
        };
        yield put(addTodoSuccess(newTodo));
    } catch (error) {
        yield put(addTodoFailure(error.message));
    }
}

function* deleteTodoSaga(action) {
    try {
        yield put(deleteTodoSuccess(action.payload));
    } catch (error) {
        yield put(deleteTodoFailure(error.message));
    }
}

function* toggleTodoSaga(action) {
    try {
        yield put(toggleTodoSuccess(action.payload));
    } catch (error) {
        yield put(toggleTodoFailure(error.message));
    }
}

function* updatedTodosSaga(action) {
    try {
        yield put(updatedTodosSuccess(action.payload));
    } catch (error) {
        yield put(updatedTodosFailure(error.message));
    }
}

export default function* todoSaga() {
    yield takeLatest(ADD_TODO, addTodoSaga);
    yield takeLatest(DELETE_TODO, deleteTodoSaga);
    yield takeLatest(TOGGLE_TODO, toggleTodoSaga);
    yield takeLatest(UPDATE_TODO, updatedTodosSaga);
}