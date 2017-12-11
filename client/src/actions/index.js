import axios from 'axios';
import { FETCH_ALL_POSTS, ERROR_HANDLER, VOTE, FETCH_A_POST, GET_COMMENTS, GET_CATEGORY_POSTS } from './types';

export function fetchAllPosts(posts) {
  return {
    type: FETCH_ALL_POSTS,
    posts
  }
}

export function fetchAPost(post) {
  return {
    type: FETCH_A_POST,
    post
  }
}


export function handleErrors(error) {
  return {
    type: ERROR_HANDLER,
    error
  }
}

export function getComments(comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function getCategoryPosts(catposts) {
  return {
    type: GET_CATEGORY_POSTS,
    catposts
  }
}







const headers =   {headers: { 'Authorization': 'whatever-you-want' }}
export function fetchingAllPosts(dispatch) {
  return dispatch => {
    axios
      .get('http://localhost:3001/posts', headers)
      .then(response => {
        dispatch(fetchAllPosts(response.data))
      })
  }
}

export function votingOnPost(id, option, dispatch) {
  console.log(id);
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
    .then(json => { 
      console.log(json)
      dispatch(fetchAPost(json));
    });
  }
}

export function fetchingPost(id, dispatch) {
  return dispatch => {
    axios
    .get(`http://localhost:3001/posts/${id}`, headers)
    .then(response => { dispatch(fetchAPost(response.data))})
    // .catch(error => { dispatch(handleErrors(error))})
  }
}

export function fetchingComments(id, dispatch) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/posts/${id}/comments`, headers)
     .then(response => {
       dispatch(getComments(response.data));
     })
  }
}

export function fetchingCategoryPosts(category, dispatch) {
  console.log(category)
  return dispatch => {
    axios
    .get(`http://localhost:3001/${category}/posts`, headers)
    .then(response => {
      console.log(response)
      dispatch(getCategoryPosts(response.data))
    })
    .catch(error => {dispatch(handleErrors(error))})
  }
}

export function addNewPost(post, dispatch) {
  return dispatch => {
    fetch(`http://localhost:3001/posts`, {
      headers: {
             'Authorization': 'whatever-you-want',
             'Accept': 'application/json',
             "Content-Type": "application/json",
         },
         method: 'Post',
         body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(json => { 
      console.log(json)
    });
  }
}
