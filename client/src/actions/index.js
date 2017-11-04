export const FETCH_POST_CATEGORIES = 'FETCH_POST_CATEGORIES';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchPostCategories(categories) {
  const action ={
    type: FETCH_POST_CATEGORIES,
    payload: categories
  }
  return action;
}

export function fetchError(error) {
  const action = {
    type: FETCH_ERROR,
    payload: error
  }
  return action;
}


const headers = { headers: { 'Authorization': 'whatever-you-want' }}
export function fetchingCategories(dispatch) {
  return dispatch => {
    fetch('http://localhost:3001/categories', headers)
    .then(response => response.json())
    .then(categories => {
      dispatch(fetchPostCategories(categories));
    })
    .catch(error => {
      dispatch(fetchError(error));
    })
  }
}
