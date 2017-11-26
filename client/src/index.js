
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import appReducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    appReducers,
    composeEnhancers(
      applyMiddleware(thunk)  
    )
)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();