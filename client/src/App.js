import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route path='/' component={HomePage} />
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
