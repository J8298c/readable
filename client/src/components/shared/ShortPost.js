import React from 'react';

const ShortPost = (props) => (
    <div>
        <h1>{props.postTitle}</h1>
        <p>{props.postAuthor}</p>
        <div>
            <p>{props.postVoteScore}</p>
            <p>{props.postCategory}</p>
        </div>
    </div>
)
export default ShortPost;