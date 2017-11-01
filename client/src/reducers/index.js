import { FETCH_CAT_TITLES, FETCH_CAT_POSTS } from '../actions/index';


function appReducer(state={}, action) {
  if(action.type === FETCH_CAT_TITLES) {
    const { title } = action;
    const newState = Object.assign({}, state, { title });
    return newState;
  } else if(action.type === FETCH_CAT_POSTS) {
    const { posts } = action;
    const newState = Object.assign({}, state, { posts });
    return newState;
  }
  return state;
}
export default appReducer;
