import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/posts/:name' component={Categories} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
