import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostHome from './components/PostHome';
import NavBar from './components/NavBar';
import './App.css';
import CreatePost from './components/CreatePost';
import CategoryHome from './components/CategoryHome';
import EditPost from './components/EditPost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/post/:id' component={PostHome} />
        <Route path='/category/:category' component={CategoryHome} />
        <Route path='/posts/new' component={CreatePost} />
        <Route path='/edit/:id' component={EditPost} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
