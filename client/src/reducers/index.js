import { FETCH_POST_CATEGORIES, FETCH_ERROR } from '../actions/index';

export function appReducer(state = {}, action) {
  if(action.type === FETCH_POST_CATEGORIES) {
    const { categories } = action.payload;
    const newState = Object.assign({}, state, { categories });
    return newState;
  } else if (action.type === FETCH_ERROR) {
    const { error } = action.payload;
    const newState = Object.assign({}, state, { error });
    return newState;
  }
}
