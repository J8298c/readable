import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostHome from './components/PostHome';
import NavBar from './components/NavBar';
import './App.css';
import CreatePost from './components/CreatePost';
import CategoryHome from './components/CategoryHome';
import EditPost from './components/EditPost'
import CommentHome from './components/CommentHome';
import EditComment from './components/EditComment';
import CreateComment from './components/CreateComment';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route path='/post/:id' component={PostHome} />
        <Route path='/:category/posts' component={CategoryHome} />
        <Route path='/posts/new' component={CreatePost} />
        <Route exact path='/edit/:id' component={EditPost} />
        <Route path='/comments/:id' component={CommentHome} />
        <Route path='/:parentId/new_comment' component={CreateComment} />
        <Route path='/edit/comment/:id' component={EditComment} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
