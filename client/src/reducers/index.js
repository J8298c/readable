import { FETCH_CATEGORY_TITLES, FETCH_ERROR, FETCH_CATEGORY_POSTS } from '../actions/index';
import { initialAppState } from '../index';

const appReducer = (state = initialAppState, action) => {
  if(action.type === FETCH_CATEGORY_TITLES) {
    const {categories} = action;
    const newState = Object.assign({}, state, { categories });
    return newState;
  } else if(action.type === FETCH_ERROR) {
    const { error } = action;
    const newState = Object.assign({}, state, { error });
    return newState;
  } else if(action.type === FETCH_CATEGORY_POSTS) {
    const { posts } = action;
    const newState = Object.assign({}, state, { posts });
    return newState;
  }
  return state;
}
export default appReducer;
