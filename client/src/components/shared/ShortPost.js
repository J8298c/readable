import React from 'react';
import { Card } from 'semantic-ui-react';

const ShortPost = (props) => (
    <div className={props.className}>
    <Card.Group>
    <Card>
            <Card.Content>
                <Card.Header>
                    {props.postTitle}
                </Card.Header>
                <Card.Meta>
                    {props.postAuthor}
                </Card.Meta>
                <Card.Meta>
                    {props.postVoteScore}
                </Card.Meta>
                <Card.Meta>
                    {props.postCommentCount}
                </Card.Meta>
            </Card.Content>
        </Card> 
    </Card.Group>
    </div>
)
export default ShortPost;