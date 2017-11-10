import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostHome from './components/PostHome';
import Post from './components/Post';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/post/:id' component={Post} />
          <Route path='/posts/:name' component={PostHome} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
