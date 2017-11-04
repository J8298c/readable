import React from 'react';

function Posts(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <div>
        <p>{props.voteScore}</p>
        <p>{props.commentCount}</p>
      </div>
      <h6>{props.author}</h6>
      <button onClick={props.upVote(props.id, props.voteScore)}>Like</button>
    </div>
  )
}
export default Posts;
