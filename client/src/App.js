import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/posts/:name' component={Posts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
