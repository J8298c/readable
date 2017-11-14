import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoryHome from './components/CategoryHome';
import CreatePost from './components/CreatePost';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <NavBar />
                <Route  exact path='/' component={HomePage} />
                <Route path='/newpost' component={CreatePost} />
                <Route path='/:category/posts' component={CategoryHome} />
            </div>
        </BrowserRouter>
    )
  }
}

export default App;
