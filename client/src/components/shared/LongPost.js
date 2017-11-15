import React from 'react';
import AppButton from './AppButton';
import { Card } from 'semantic-ui-react';

const LongPost = (props) => (
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
            <Card.Content extra>
                <div className='votingContainer'>
                    <AppButton color='green' />
                </div>
            </Card.Content>
        </Card.Content>
    </Card>
);

export default LongPost;
