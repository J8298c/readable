import { FETCH_ALL_POSTS, HANDLE_ERRORS, FETCH_CATEGORIES, FETCH_CATEGORY_POSTS, FETCH_SINGLE_POST, FETCH_POST_COMMENTS } from '../actions/types';

const AppReducers = (state={}, action) => {
  if(action.type === FETCH_ALL_POSTS) {
    const { posts } = action;
    console.log(posts)
    const newState = Object.assign({}, state, { posts })
    return newState;
  } else if (action.type === HANDLE_ERRORS) {
    const {error} = action;
    console.log(error);
  } else if(action.type === FETCH_CATEGORIES) {
    const {categories} = action.categories;
    console.log(categories)
    const newState = Object.assign({}, state, { categories })
    return newState;
  } else if(action.type === FETCH_CATEGORY_POSTS) {
    const { posts } = action;
    const newState = Object.assign({}, state, { posts })
    return newState;
  } else if(action.type === FETCH_SINGLE_POST) {
    const { post } = action;
    const newState = Object.assign({}, state, { post })
    return newState;
  } else if(action.type === FETCH_POST_COMMENTS) {
    const {comments} = action;
    const newState = Object.assign({}, state, { comments });
    return newState;
  }
  else {
    return state;
  }
}
export default AppReducers;
