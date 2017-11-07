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

export function postUpVote(score) {
    const action = {
        type: POST_UPVOTE,
        score
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

export function postingVote(id, dispatch) {
    return dispatch => {
        axios
            .get(`http://localhost:3001/posts/${id}`, {
                headers : {
                    Authorization: 'whatever-you-want' 
                },
                body: JSON.stringify({options: 'upVote'})
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => { console.log(error)})
    }
}