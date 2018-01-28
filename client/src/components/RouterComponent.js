import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListView from './PostListView';

const RouterComponent = () => (
   <BrowserRouter>
    <Route path='/' component={PostListView} />
   </BrowserRouter>
);

export default RouterComponent;