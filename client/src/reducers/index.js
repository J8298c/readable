import { HANDLE_ERROR, FETCH_CATEGORIES, FETCH_ALL_POSTS } from '../actions/index'

const appState = {
    categories: [],
    posts: [],
}

export default function appReducers(state = appState, action) {
    if(action.type === FETCH_CATEGORIES) {
        const { categories } = action.categories;
        const newState = Object.assign({}, state, { categories: categories });
        return newState;
    }
    else if (action.type === HANDLE_ERROR) {
        const { error } = action;
        const newState = Object.assign({}, state, { error });
        return newState;
    }
    else if(action.type === FETCH_ALL_POSTS) {
       const { posts } = action;
       const newState = Object.assign({}, state, { posts})
       return newState;
    }
    else {
        return state;
    }
}