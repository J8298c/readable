import {
    HANDLE_ERROR, FETCH_CATEGORIES, FETCH_ALL_POSTS, ADD_A_POST,
    FETCH_CATEGORY_POSTS, FETCH_A_POST, FETCH_COMMENTS, FETCH_A_COMMENT
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
        console.log(action);
        const {post} = action;
        const newState = Object.assign({}, state, { post });
        return newState;
    }
    else if(action.type === FETCH_COMMENTS) {
        console.log(action)
        const {comments} = action;
        const newState = Object.assign({}, state, { comments })
        return newState;
    }
    else if(action.type === FETCH_A_COMMENT) {
      console.log(action);
      const { comment } = action;
      const newState = Object.assign({}, state, { comment });
      return newState;
    }
    else {
        return state;
    }
}
