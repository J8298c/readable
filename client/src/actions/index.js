import axios from 'axios';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const HANDLE_ERROR = 'HANDLE_ERROR';
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';

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