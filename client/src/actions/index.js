import axios from 'axios';
import { FETCH_ALL_POSTS, HANDLE_ERRORS } from './types';

export function fetchAllPosts(posts) {
  return {
    type: FETCH_ALL_POSTS,
    posts
  }
}

export function handleErrors(error) {
  return {
    type: HANDLE_ERRORS,
    error
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
