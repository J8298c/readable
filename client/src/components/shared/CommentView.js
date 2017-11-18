import React from 'react';

const CommentView = (props) => (
    <div>
       <p>{props.commentBody}</p>
       <p>{props.commentAuthor}</p> 
    </div>
)

export default CommentView;