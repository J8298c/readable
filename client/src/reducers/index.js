import { FETCH_ALL_POSTS, HANDLE_ERRORS } from '../actions/types';

const AppReducers = (state={}, action) => {
  if(action.type === FETCH_ALL_POSTS) {
    const { posts } = action;
    console.log(posts)
    const newState = Object.assign({}, state, { posts })
    return newState;
  } else if (action.type === HANDLE_ERRORS) {
    const {error} = action;
    console.log(error);
  }
  else {
    return state;
  }
}
export default AppReducers;
