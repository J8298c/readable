import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <NavBar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/post/:id' component={PostHome} />
            <Route exact path='/:category/posts' component={CategoryHome} />
            <Route exact path='/posts/new' component={CreatePost} />
            <Route exact path='/edit/:id' component={EditPost} />
            <Route exact path='/comments/:id' component={CommentHome} />
            <Route exact path='/:parentId/new_comment' component={CreateComment} />
            <Route exact path='/edit/comment/:id' component={EditComment} />
            <Route render={() => <h1>Not found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
