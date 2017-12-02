import React from 'react';
import {Button, Card} from 'semantic-ui-react';

const Post= (props) => (
    <Card>
        <Card.Content>
                <Card.Header>
                    {props.postTitle}
                </Card.Header>
                <Card.Meta>
                    {props.postAuthor}
                </Card.Meta>
                <Card.Description>
                    {props.postBody}
                </Card.Description>
        </Card.Content>
        {
                this.props.showVote ?
                    <Card.Content extra>
                        <div className='voting-div'>
                            <Button basic color='green'>Like</Button>
                            <Button basic color='red'>Unlike</Button>
                        </div>
                    </Card.Content>
                    : null

        }
        </Card>
);

export default Post;