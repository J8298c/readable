import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CreatePost from './components/CreatePost';
import CategoryHome from './components/CategoryHome';
import PostHome from './components/PostHome';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route path='/create' component={CreatePost} />
          <Route path='/:category/posts' component={CategoryHome} />
          <Route path='/posts/:id' component={PostHome} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
