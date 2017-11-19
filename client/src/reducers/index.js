import {
    HANDLE_ERROR, FETCH_CATEGORIES, FETCH_ALL_POSTS, ADD_A_POST, FETCH_CATEGORY_POSTS,
    FETCH_A_POST,
    FETCH_COMMENTS
} from '../actions/consts';

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
       const newState = Object.assign({}, state, { posts });
       return newState;
    }
    else if(action.type === ADD_A_POST) {
        const {posts} = action;
        const newState = Object.assign({}, state, { posts });
        return newState;
    }
    else if(action.type === FETCH_CATEGORY_POSTS) {
        const { posts } = action;
        const newState = Object.assign({}, state, { posts });
        return newState;
    }
    else if(action.type === FETCH_A_POST) {
        const {post} = action;
        const newState = Object.assign({}, state, { post });
        return newState;
    }
    else if(action.type === FETCH_COMMENTS) {
        const {comments} = action;
        const newState = Object.assign({}, state, { comments })
        return newState;
    }
    else {
        return state;
    }
}