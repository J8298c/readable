import { FETCH_CATEGORY_TITLES, FETCH_ERROR } from '../actions/index';

const appReducers = (state = {}, action) => {
    if(action.type === FETCH_CATEGORY_TITLES) {
       const { categories } = action.categories;
       const newState = Object.assign({}, state, { categories });
       return newState;
    }
    return state;
}

export default appReducers;