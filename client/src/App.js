import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import CreatePost from './components/CreatePost';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts/:name' component={Categories} />
          <Route path='/posts/create' component={CreatePost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
