import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import RouterComponent from './components/RouterComponent';
import postReducer from './reducers/post_reducers';

const store = createStore(postReducer, {}, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
