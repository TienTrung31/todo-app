/* import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import todoReducer from './reducers/todoReducers'
import todoSaga from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    todoReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(todoSaga);

export default store; */

//With Redux Persist
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import todoReducer from './reducers/todoReducers';
import todoSaga from './sagas/todoSagaPersist';

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['filterDate'] 
    // whitelist: ['todos'] 
};

const persistedReducer = persistReducer(persistConfig, todoReducer);
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
);

export const persistor = persistStore(store);

sagaMiddleware.run(todoSaga);