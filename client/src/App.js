import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path='/' component={HomePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
