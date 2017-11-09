import axios from 'axios';
export const FETCH_CATEGORY_TITLES = 'FETCH_CATEGORY_TITLES';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';
export const POST_UPVOTE = 'POST_UPVOTE';


export function fetchCategoryTitles(categories) {
    const action = {
        type: FETCH_CATEGORY_TITLES,
        categories
    }
    return action;
}

export function handleError(error) {
    const action = {
        type: HANDLE_ERRORS,
        error
    }
    return action;
}

export function fetchCatPosts(posts) {
    const action = {
        type: FETCH_CATEGORY_POSTS,
        posts
    }
    return action;
}

export function postUpVote(post) {
    const action = {
        type: POST_UPVOTE,
        post
    }
    return action;
}

const headers = { headers: { 'Authorization': 'whatever-you-want' }};
export function fetchingCategoryTitles(dispatch) {
    return dispatch => {
        axios
            .get('http://localhost:3001/categories', headers)
            .then(response => {
                dispatch(fetchCategoryTitles(response.data))
            })
            .catch(error => { handleError(error)})
    }
}

export function fetchingCatPosts(category, dispatch) {
    return dispatch => {
        axios
            .get(`http://localhost:3001/${category}/posts`, headers)
            .then(response => {
                dispatch(fetchCatPosts(response.data))
            })
            .catch(error => { dispatch(handleError(error))})
    }
}
const option = JSON.stringify({option: 'upVote'})
export function postingVote(id, dispatch) {
    return dispatch => {
      fetch(`http://localhost:3001/posts/${id}`, {
        headers: {
          'Authorization': 'whatever-you-want',
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({option: "upVote"}),
        method: 'POST',
      })
      .then(response => response.json())
      .then(json => { dispatch(postUpVote(json))})
      .catch(error => { dispatch(handleError(error))})
    }
}
