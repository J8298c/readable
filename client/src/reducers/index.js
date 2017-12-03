import { FETCH_ALL_POSTS, HANDLE_ERRORS, FETCH_CATEGORIES } from '../actions/types';

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
  }
  else {
    return state;
  }
}
export default AppReducers;
