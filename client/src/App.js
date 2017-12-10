import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostHome from './components/PostHome';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route path='/post/:id' component={PostHome} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
