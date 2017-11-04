import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to='/posts/create'>
        <button>Create a Post</button>
      </Link>
    </div>
  )
}
export default Posts;
