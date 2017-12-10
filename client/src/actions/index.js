import axios from 'axios';
import { FETCH_ALL_POSTS, ERROR_HANDLER, VOTE, FETCH_A_POST } from './types';

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
    action: ERROR_HANDLER,
    error
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
    .then(response => response.json)
    .then(json => {
      console.log(json)
    })
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