import axios from 'axios';
export const FETCH_CATEGORY_TITLES = 'FETCH_CATEGORY_TITLES';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';

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

