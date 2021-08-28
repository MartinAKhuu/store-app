import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import cartReducer from './redux/reducers/cart';
import filterReducer from './redux/reducers/filter';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
