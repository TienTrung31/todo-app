import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_TODOS, fetchTodosSuccess, fetchTodosFailure } from '../actions/todoActions';

// Giả lập call API
const fetchTodosApi = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve([
            { id: 1, title: 'Học React', date: '2024-10-20', startTime: '09:00', endTime: '11:00', description: 'Học cơ bản về React', category: 'Dev', completed: false },
            { id: 2, title: 'Học Redux Saga', date: '2024-10-21', startTime: '14:00', endTime: '16:00', description: 'Tìm hiểu về Redux Saga', category: 'Dev', completed: false },
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