import { FETCH_CAT_TITLES } from '../actions/index';


function appReducer(state={}, action) {
  if(action.type === FETCH_CAT_TITLES) {
    const { title } = action;
    const newState = Object.assign({}, state, { title });
    return newState;
  }
  return state;
}
export default appReducer;
