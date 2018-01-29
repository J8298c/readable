import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListView from './PostListView';
import CategoryPostView from './CategoryPostView';
import NavBar from './NavBar';

class RouterComponent extends Component {
    render() {
        return(
          <BrowserRouter>
                <div>
                    <NavBar />
                    <Route exact path='/' component={PostListView} />
                    <Route path='/:category' component={CategoryPostView} /> 
                </div>
            </BrowserRouter>  
        )
    }
}
  


export default RouterComponent;