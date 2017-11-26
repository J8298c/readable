import axios from 'axios';
import {FETCH_CATEGORIES, HANDLE_ERROR,
  FETCH_ALL_POSTS, ADD_A_POST, FETCH_CATEGORY_POSTS,
  FETCH_A_POST, LIKE_POST, FETCH_COMMENTS, ADD_A_COMMENT,
  FETCH_A_COMMENT, SORT_LIST } from './types';


export function fetchCategories(categories) {
    const action = {
        type: FETCH_CATEGORIES,
        categories
    }
    return action;
}

export function handleError(error) {
    const action = {
        type: HANDLE_ERROR,
        error
    }
    return action;
}

export function fetchAllPosts(posts) {
    const action = {
        type: FETCH_ALL_POSTS,
        posts
    }
    return action;
}

export function addAPost(posts) {
    const action = {
        type: ADD_A_POST,
        posts
    }
    return action;
}

export function fetchCategoryPost(posts) {
    const action = {
        type: FETCH_CATEGORY_POSTS,
        posts
    }
    return action;
}

export function fetchAPost(post) {
    const action = {
        type: FETCH_A_POST,
        post
    }
    return action;
}

export function likePost(post) {
    const action = {
        type: LIKE_POST,
        post
    }
    return action;
}

export function fetchComments(comments) {
    const action = {
        type: FETCH_COMMENTS,
        comments
    }
    return action;
}

export function addACommentt(status) {
    const action = {
        type: ADD_A_COMMENT,
        status
    }
    return action;
}

export function fetchAComment(comment) {
  const action = {
    type: FETCH_A_COMMENT,
    comment
  }
  return action;
}

export function sortList(list) {
  const action = {
    type: SORT_LIST,
    list
  }
  return action;
}

//-------------Thunks----------------//
const headers = { headers: { 'Authorization': 'whatever-you-want' }}
export function fetchingCategories(dispatch){
    return dispatch => {
        axios
            .get('http://localhost:3001/categories', headers)
            .then(response => {
                dispatch(fetchCategories(response.data))
            })
            .catch(error => dispatch(handleError(error)))
    }
}

export function fetchingAllPosts(dispatch) {
    return dispatch => {
        axios
        .get('http://localhost:3001/posts', headers)
        .then(response => {
            dispatch(fetchAllPosts(response.data))
        })
        .catch(error => { dispatch(handleError(error))})
    }
}

export function addingAPost(postData,dispatch) {
    return dispatch => {
        fetch('http://localhost:3001/posts', {
          headers: {
              'Authorization': 'whatever-you-want',
              'Accept': 'application/json',
              "Content-Type": "application/json",
          },
            body: JSON.stringify(postData),
            method: 'POST',
        })
        .then(response => {
          console.log('app post success')
            dispatch(addAPost(response.data))
        })
        .catch(error => {handleError(error)})
    }
}

export function fetchingCategoryPosts(category, dispatch) {
    return dispatch => {
        axios
            .get(`http://localhost:3001/${category}/posts`, headers)
            .then(response => {
                dispatch(fetchCategoryPost(response.data))
            })
            .catch(error => {dispatch(handleError(error))})
    }
}

export function fetchingAPost(id, dispatch) {
    return dispatch => {
        axios
            .get(`http://localhost:3001/posts/${id}`, headers)
            .then(response => {
                dispatch(fetchAPost(response.data))
            })
            .catch(error => { dispatch(handleError(error))})
    }
}

export function likingPost(id, option, dispatch) {
    let vote = `${option}`
    return dispatch => {
        fetch(`http://localhost:3001/posts/${id}`,  {
                headers: {
                    'Authorization': 'whatever-you-want',
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({option: vote}),
                method: 'POST',
            })
            .then(response => response.json())
            .then(json => { dispatch(fetchAPost(json))})
            .catch(error => { dispatch(handleError(error))})
    }
}

export function fetchingComments(id, dispatch) {
    return dispatch => {
        axios
            .get(`http://localhost:3001/posts/${id}/comments`, headers)
            .then(response => {
                dispatch(fetchComments(response.data))
            })
            .catch(error => { dispatch(handleError(error))})
    }
}

export function addingAComment(post, dispatch) {
  console.log(post)
    fetch(`http://localhost:3001/comments`,  {
        headers: {
            'Authorization': 'whatever-you-want',
            'Accept': 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
        method: 'POST',
    })
}


export function likingComment(id, option, dispatch) {
    let vote = `${option}`
    return dispatch => {
        fetch(`http://localhost:3001/comments/${id}`,  {
                headers: {
                    'Authorization': 'whatever-you-want',
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({option: vote}),
                method: 'POST',
            })
            .then(response => response.json())
            .then(json => { dispatch(fetchAComment(json))})
            .catch(error => { dispatch(handleError(error))})
    }
}

export function fetchingAComment(id, dispatch) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/comments/${id}`, headers)
      .then(response => {
        dispatch(fetchAComment(response.data))
      })
      .catch(error => { dispatch(handleError(error))})
  }
}