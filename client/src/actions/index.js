export const FETCH_CAT_TITLES = 'FETCH_CAT_TITLES';
export const THUNK_ERROR = 'THUNK_ERROR'
export const FETCH_CAT_POSTS = 'FETCH_CAT_POSTS';


export function fetchCatTitles(title) {
  const action = {
    type: FETCH_CAT_TITLES,
    title
  };
  return action;
}

export function fetchCatPosts(posts) {
  const action = {
    type: FETCH_CAT_POSTS,
    posts
  }
  return action;
}

export function thunkError(error) {
  const action = {
    type: THUNK_ERROR,
    error
  };
  return action;
}

const headers =  { headers: { 'Authorization': 'whatever-you-want' }}
export function fetchingTitles(dispatch) {
  return dispatch => {
    fetch('http://localhost:3001/categories', headers)
    .then(response => response.json())
    .then(titles => {
      console.log(titles);
      dispatch(fetchCatTitles(titles))
    })
    .catch(error => { dispatch(thunkError(error))})
  }
}

export function fetchingCatPosts(category, dispatch) {
  console.log(category);
  return dispatch => {
    fetch(`http://localhost:3001/${category}/posts`, headers)
    .then(response => response.json())
    .then(posts => {
      console.log(posts)
     dispatch(fetchCatPosts(posts))})
    .catch(error => { dispatch(thunkError(error))})
  }
}
