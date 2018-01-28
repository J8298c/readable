import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListView from './PostListView';
import CategoryPostView from './CategoryPostView';

const RouterComponent = () => (
   <BrowserRouter>
   <div>
        <Route exact path='/' component={PostListView} />
        <Route path='/:category' component={CategoryPostView} /> 
   </div>
    
   </BrowserRouter>
);

export default RouterComponent;