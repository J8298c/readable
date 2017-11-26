import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
