import React from 'react';

const PostCard = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <p>{props.author}</p>
        <div>
            <p>{props.score}</p>
            <button onClick={props.onClick}>Like</button>
        </div>
    </div>
)
export default PostCard;