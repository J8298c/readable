import axios from 'axios';
import { FETCH_ALL_POSTS, ERROR_HANDLER, FETCH_A_POST, GET_COMMENTS, GET_CATEGORY_POSTS, STATUS_MESSAGE, GET_A_COMMENT, GET_CATEGORIES } from './types';

export function handleErrors(error) {
  return {
    type: ERROR_HANDLER,
    error
  }
}

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

export function getCategoryPosts(catposts) {
  return {
    type: GET_CATEGORY_POSTS,
    catposts
  }
}

export function statusMessage(message) {
  return {
    type: STATUS_MESSAGE,
    message
  }
}

export function fetchAllComments(comments) {
  return {
    type: GET_COMMENTS,
    comments,
  }
}

export function getAComment(comment) {
  return {
    type: GET_A_COMMENT,
    comment
  }
}

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
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

export function votingOnPost(id, option, type,  dispatch) {

  return dispatch => {
    let vote = `${option}`
    if(type === 'post') {
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
        dispatch(fetchAPost(json));
      });
    } else {
      fetch(`http://localhost:3001/comments/${id}`, {
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
        dispatch(getAComment(json));
      });
    }

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
       dispatch(fetchAllComments(response.data));
     })
  }
}

export function fetchingCategoryPosts(category, dispatch) {
  return dispatch => {
    axios
    .get(`http://localhost:3001/${category}/posts`, headers)
    .then(response => {
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
    });
  }
}

export function deletePost(id, type,  dispatch) {
  return dispatch => {
    if(type === 'post') {
      axios
        .delete(`http://localhost:3001/posts/${id}`, headers)
        .then(response => {
          dispatch(statusMessage(response.data))
        })
    } else {
      axios
        .delete(`http://localhost:3001/comments/${id}`, headers)
        .then(response => {
          dispatch(statusMessage(response.data))
        })
    }
  }
}

export function editPost(id, data, dispatch) {
  return dispatch => {
    fetch(`http://localhost:3001/posts/${id}`, {
      headers: {
             'Authorization': 'whatever-you-want',
             'Accept': 'application/json',
             "Content-Type": "application/json",
         },
         method: 'Put',
         body: JSON.stringify(data)
    });
  }
}

export function fetchAComment(id, dispatch) {
  return dispatch => {
    axios
    .get(`http://localhost:3001/comments/${id}`, headers)
    .then(response => {
      dispatch(getAComment(response.data))
    })
    .catch(error => { dispatch(handleErrors(error))});
  }
}

export function commentVoter(id, option) {

}

export function fetchCategories(dispatch) {
  return dispatch => {
    axios
    .get('http://localhost:3001/categories', headers) 
    .then(response => {
      dispatch(getCategories(response.data))
    })
    .catch(error => { dispatch(handleErrors(error))})
  }
}
