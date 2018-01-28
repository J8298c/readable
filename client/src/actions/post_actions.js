const headers = {headers: { 'Authorization': 'whatever-you-want' }}
export const SET_POSTS = 'SET_POSTS';

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

export function update_score(option, id, dispatch) {
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
          .then(response => dispatch(get_all_posts()))
          .catch(error => console.log(error))
    }
}