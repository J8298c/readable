import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import AppReducers from './reducers/index';
import 'semantic-ui-css/semantic.min.css';

const store = createStore(AppReducers, {}, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
  , document.getElementById('root'));
registerServiceWorker();
