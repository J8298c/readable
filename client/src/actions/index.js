import axios from 'axios';
import { FETCH_ALL_POSTS, HANDLE_ERRORS, FETCH_CATEGORIES, ADD_A_POST, FETCH_CATEGORY_POSTS, FETCH_SINGLE_POST, FETCH_POST_COMMENTS } from './types';

export function fetchAllPosts(posts) {
  return {
    type: FETCH_ALL_POSTS,
    posts
  }
}

export function fetchPostComments(comments) {
  return {
    type: FETCH_POST_COMMENTS,
    comments
  }
}

export function handleErrors(error) {
  return {
    type: HANDLE_ERRORS,
    error
  }
}

export function fetchCategories(categories) {
  return {
    type: FETCH_CATEGORIES,
    categories
  }
}

export function fetchCategoryPosts(posts) {
  return {
    type: FETCH_CATEGORY_POSTS,
    posts
  }
}

export function fetchSinglePost(post) {
  return {
    type: FETCH_SINGLE_POST,
    post
  }
}

const headers = {headers: { 'Authorization': 'whatever-you-want' }}
export function fetchingAllPosts(dispatch) {
  return dispatch => {
    axios
    .get('http://localhost:3001/posts', headers)
    .then(response => {
      console.log(response)
      dispatch(fetchAllPosts(response.data))
    })
    .catch(error => { dispatch(handleErrors(error))})
  }
}

export function fetchingCategories(dispatch) {
  return dispatch => {
    axios
      .get('http://localhost:3001/categories', headers)
      .then(response => { dispatch(fetchCategories(response.data))})
      .catch(error => { dispatch(handleErrors(error))})
  }
}

export function addNewPost(post, dispatch) {
  return dispatch => {
    fetch('http://localhost:3001/posts', {
      headers: {
             'Authorization': 'whatever-you-want',
             'Accept': 'application/json',
             "Content-Type": "application/json",
         },
         body: JSON.stringify(post),
         method: 'POST',
    })
    .then(response => {
      console.log(response);
    })
  }
}

export function fetchingCategoryPosts(category, dispatch) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/${category}/posts`, headers)
      .then(response => { dispatch(fetchCategoryPosts(response.data))})
      .catch(error => { dispatch(handleErrors(error))})
  }
}

export function fetchingPost(id, dispatch) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/posts/${id}`, headers)
      .then(response => { dispatch(fetchSinglePost(response.data))})
      .catch(error => { dispatch(handleErrors(error))})
  }
}

export function deletingPost(id, dispatch) {
  return dispatch => {
    axios
      .delete(`http://localhost:3001/posts/${id}`, headers)
      .then(response => {
        console.log(response);
      })
      .catch(error => { dispatch(handleErrors(error))})
  }
}

export function editPost(id, post, dispatch) {
  return dispatch => {
    fetch(`http://localhost:3001/posts/${id}`, {
      headers: {
             'Authorization': 'whatever-you-want',
             'Accept': 'application/json',
             "Content-Type": "application/json",
         },
         method: 'Put',
         body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(json => { console.log(json)})
    .catch(error => { handleErrors(error)})
  }
}

export function postVote(id, option, dispatch) {
  return dispatch => {
    let vote = `${option}`
    fetch(`http://localhost:3001/posts/${id}`, {
      headers: {
             'Authorization': 'whatever-you-want',
             'Accept': 'application/json',
             "Content-Type": "application/json",
         },
         method: 'Post',
         body: JSON.stringify({option: vote})
    })
    .then(response => response.json())
    .then(json => { dispatch(fetchSinglePost(json))})
    .catch(error => { dispatch(handleErrors(error))})
  }
}

export function fetchingPostComments(id, dispatch) {
  return dispatch => {
    axios
    .get(`http://localhost:3001/posts/${id}/comments`, headers)
    .then(response => {
      dispatch(fetchPostComments(response.data));
    })
    .catch(error => { dispatch(handleErrors(error))})
  }
}
