import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Route path='/' component={HomePage} />
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
