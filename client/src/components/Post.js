import React from 'react';

function Post(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <div>
                <h6>{props.author}</h6>
                <p>{props.category}</p>
                <p>{props.commentCount}</p>
            </div>
            <div>
                <p>Score: {props.voteScore}</p>
                <button onClick={props.upVote}>Like</button>
                <button onClick={props.downVote}>Unlike</button>
            </div>
        </div>
    )
}
export default Post;