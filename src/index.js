import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

