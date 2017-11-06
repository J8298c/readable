import axios from 'axios';
export const FETCH_CATEGORY_TITLES = 'FETCH_CATEGORY_TITLES';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const FETCH_CATEGORY_POSTS = 'FETCH_CATEGORY_POSTS';


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

const headers  = { headers: { 'Authorization': 'whatever-you-want' }}

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

