export const FETCH_CAT_TITLES = 'FETCH_CAT_TITLES';
export const THUNK_ERROR = 'THUNK_ERROR'

export function fetchCatTitles(title) {
  const action = {
    type: FETCH_CAT_TITLES,
    title
  };
  return action;
}

export function thunkError(error) {
  const action = {
    type: THUNK_ERROR,
    error
  };
  return action;
}

export function fetchingTitles(dispatch) {
  return dispatch => {
    const headers =  { headers: { 'Authorization': 'whatever-you-want' }}
    fetch('http://localhost:3001/categories', headers)
    .then(response => response.json())
    .then(titles => {
      console.log(titles);
      dispatch(fetchCatTitles(titles))
    })
    .catch(error => { dispatch(thunkError(error))})
  }
}
