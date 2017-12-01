import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import CategoryHome from './components/CategoryHome';
import PostHome from './components/PostHome';
import Comments from './components/Comments';

import './App.css';
class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/create' component={CreatePost} />
          <Route path='/:category/posts' component={CategoryHome} />
          <Route path='/posts/:id' component={PostHome} />
          <Route path='/comments/:id' component={Comments} />
        </div>
      </BrowserRouter>
        </MuiThemeProvider>
    )
  }
}

export default App;