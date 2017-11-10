import React from 'react';

export function PostCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <div>
        <p>
          {props.voteScore}
        </p>
        <button onClick={props.onClick}>like</button>
      </div>
    </div>
  )
}
