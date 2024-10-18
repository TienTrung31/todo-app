import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_TODOS, fetchTodosSuccess, fetchTodosFailure } from '../actions/todoActions';

// Giả lập API call
const fetchTodosApi = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve([
            { id: 1, text: 'Học React', completed: false },
            { id: 2, text: 'Học Redux Saga', completed: false },
        ]), 1000)
    );

function* fetchTodosSaga() {
    try {
        const todos = yield call(fetchTodosApi);
        yield put(fetchTodosSuccess(todos));
    } catch (error) {
        yield put(fetchTodosFailure(error.message));
    }
}

export default function* todoSaga() {
    yield takeLatest(FETCH_TODOS, fetchTodosSaga);
}