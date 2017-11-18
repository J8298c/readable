import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import appReducers from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

// const logger = store => next => action => {
//     console.group(action.type)
//     console.info('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     console.groupEnd(action.type)
//     return result
// }
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
    </Provider>, document.getElementById('root'));
registerServiceWorker();
