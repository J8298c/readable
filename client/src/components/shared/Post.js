import React from 'react';

const Post = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.body}</p>
    <div>
      <p>{props.voteScore}</p>
      <button onClick={() => { props.upVote(props.id)}}>Like</button>
    </div>
  </div>
)
export default Post;
