import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import appReducers from './reducers/index';

const store = createStore(appReducers, {}, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <App />  
</Provider>
, document.getElementById('root'));
registerServiceWorker();

