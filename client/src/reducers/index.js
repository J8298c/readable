import { FETCH_ALL_POSTS, ERROR_HANDLER, FETCH_A_POST, GET_COMMENTS } from '../actions/types';

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
  } else if(action.type = GET_COMMENTS) {
    const { comments } = action;
    const newState = Object.assign({}, state, { comments });
    return newState;
  }
  else {
    return state
  }
}
