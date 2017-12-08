import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import CreatePost from './components/CreatePost';
import CategoryHome from './components/CategoryHome';
import PostHome from './components/PostHome';
import EditPost from './components/EditPost';
import CreateComment from './components/CreateComment';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/posts/createpost' component={CreatePost} />
          <Route exact path='/:category' component={CategoryHome} />
          <Route exact path='/posts/:id' component={PostHome} />
          <Route path='/posts/:id/edit' component={EditPost} />
          <Route path='/comment/new' component={CreateComment} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
