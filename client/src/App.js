import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route path='/createpost' component={CreatePost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
