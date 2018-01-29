import { SET_POSTS, GET_CATEGORY_POSTS, GET_CATEGORIES } from '../actions/post_actions';

function postReducer(state = {}, action) {
    switch(action.type) {
        case SET_POSTS :
            return Object.assign({}, state, { posts: action.posts})

        case GET_CATEGORY_POSTS :
            return Object.assign({}, state, { posts: action.posts})

        case GET_CATEGORIES: 
            return Object.assign({}, state, { categories: action.categories})
            
        default:
            return state
    }
}

export default postReducer;