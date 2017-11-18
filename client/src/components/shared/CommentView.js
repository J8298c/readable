import React from 'react';
import { Comment } from 'semantic-ui-react';

const Comments = (props) => (
    <Comment>
        <Comment.Content>
            <Comment.Author>{props.commentAuthor}</Comment.Author>
                <Comment.Metadata>
                    {props.timeStamp}
                </Comment.Metadata>
                <Comment.Text>
                    {props.commentBody}
                </Comment.Text>
        </Comment.Content>
    </Comment>
)
export default Comments;