export const FETCH_CATEGORY_TITLES = 'FETCH_CATEGORY_TITLES';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchCatTitles(categories) {
  const action = {
    type: FETCH_CATEGORY_TITLES,
    categories
  }
  return action;
}

export function fetchError(error) {
  const action = {
    type: FETCH_ERROR,
    error
  }
  return action;
}

const headers = { headers: { 'Authorization': 'whatever-you-want' }};
export function fetchingCatTitles(dispatch) {
  return dispatch => {
    fetch('http://localhost:3001/categories', headers)
    .then(response => response.json())
    .then(json => {
      dispatch(fetchCatTitles(json))
    })
    .catch(error => {
      dispatch(fetchError(error))
    })
  }
}
