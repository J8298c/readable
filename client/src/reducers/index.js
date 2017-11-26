import { FETCH_CATEGORIES, HANDLE_ERRORS } from '../actions/types';

function appReducers(state={}, action) {
    if(action.type === FETCH_CATEGORIES) {
        const { categories } = action;
        const newState = Object.assign({}, state, { categories })
        return newState;
    }
    else if(action.type === HANDLE_ERRORS) {
        const { error } = action;
        const newState = Object.assign({}, state, { error })
        return newState;
    }
    return state;
}

export default appReducers