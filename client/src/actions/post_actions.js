const headers = {headers: { 'Authorization': 'whatever-you-want' }}
export const SET_POSTS = 'SET_POSTS';
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS';


export function setPosts(posts) {
    return {
        type: SET_POSTS,
        posts
    }
}


export function get_all_posts(dispatch) {
    return dispatch => {
        fetch('http://localhost:3001/posts', headers)
        .then(response => response.json())
        .then(posts => { 
            dispatch(setPosts(posts))
        })
        .catch(error => console.log(error))
    }
}

export function update_score(option, id, type, category, dispatch) {
    return dispatch => {
        fetch(`http://localhost:3001/posts/${id}`, {
            headers: {
                   'Authorization': 'whatever-you-want',
                   'Accept': 'application/json',
                   "Content-Type": "application/json",
               },
               method: 'Post',
               body: JSON.stringify({option: option})
          })
          .then(response => response.json())
          .then(response =>{ 
              if(type === 'get all') {
                dispatch(get_all_posts())
              } else if(type === 'get cats') {
                  dispatch(get_category_posts(category))
              }
            })
          .catch(error => console.log(error))
    }
}

export function getCategoryPost(posts) {
    return {
        type: GET_CATEGORY_POSTS,
        posts
    }
}

export function get_category_posts(category, dispatch) {
    return dispatch => {
        fetch(`http://localhost:3001/${category}/posts`, headers)
        .then(response => response.json())
        .then(posts => dispatch(getCategoryPost(posts)))
        .catch(error => console.log(error))
    }
}