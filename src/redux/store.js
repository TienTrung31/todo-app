import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducers'
import todoSaga from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default store;