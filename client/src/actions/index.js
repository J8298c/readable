import { FETCH_CATEGORIES, HANDLE_ERRORS } from './types';
import axios from 'axios';

export function fetchCategories(categories) {
    const action = {
        type: FETCH_CATEGORIES,
        categories
    }
    return action;
}

export function handleErrors(error) {
    const action = {
        type: HANDLE_ERRORS,
        error
    }
    return action;
}








//==================Thunks=====================//
const headers = { headers: { 'Authorization': 'whatever-you-want' }};

export function fetchingCategories(dispatch) {
    return dispatch => {
        axios
            .get('http://localhost:3001/categories', headers)
            .then(response => { dispatch(fetchCategories(response.data))})
            .catch(error => {dispatch(handleErrors(error))})
    }
}