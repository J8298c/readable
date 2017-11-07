import { FETCH_CATEGORY_TITLES, HANDLE_ERRORS, FETCH_CATEGORY_POSTS, POST_UPVOTE } from '../actions/index';

const appReducers = (state = {}, action) => {
    if(action.type === FETCH_CATEGORY_TITLES) {
       const { categories } = action.categories;
       const newState = Object.assign({}, state, { categories });
       return newState;
    } else if (action.type === FETCH_CATEGORY_POSTS) {
        const {posts} = action;
        const newState = Object.assign({}, state, { posts })
        return newState;
    } else if (action.type === HANDLE_ERRORS) {
        const {error} = action;
        const newState = Object.assign({}, state, { error })
        return newState;
    } else if (action.type === POST_UPVOTE) {
        console.log(action);
    }
    return state;
}

export default appReducers;