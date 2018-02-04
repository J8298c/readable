import { FETCH_ALL_POSTS, ERROR_HANDLER, FETCH_A_POST, GET_COMMENTS, GET_CATEGORY_POSTS, GET_A_COMMENT, GET_CATEGORIES, IS_LOADING } from '../actions/types';

export default function appReducer(state = {}, action) {
  if(action.type === FETCH_ALL_POSTS) {
    const { posts } = action;
    const newState = Object.assign({}, state, { posts });
    return newState;
  } else if (action.type === ERROR_HANDLER) {
    const { error } = action;
    const newState = Object.assign({}, state, { error})
    return newState
  } else if(action.type === FETCH_A_POST) {
    const { post } = action;
    const newState = Object.assign({}, state, { post });
    return newState;
  } else if ( action.type === GET_CATEGORY_POSTS) {
    const { catposts } = action;
    const newState = Object.assign({}, state, { catposts });
    return newState;
  } else if(action.type === GET_COMMENTS) {
    const { comments } = action;
    const newState = Object.assign({}, state, { comments });
    return newState;
  } else if(action.type === GET_A_COMMENT) {
    const { comment } = action;
    const newState = Object.assign({}, state, { comment });
    return newState;
  } else if(action.type === GET_CATEGORIES) {
    const { categories } = action;
    const newState = Object.assign({}, state, { categories });
    return newState;
  } else if(action.type === IS_LOADING) {
    const { boolean } = action;
    const newState = Object.assign({}, state, { isLoading: boolean})
  }
  else {
    return state
  }
}
