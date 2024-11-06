/* import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App; */

//With Redux Persist
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todo />
      </PersistGate>
    </Provider>
  );
}

export default App;