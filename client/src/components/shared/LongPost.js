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
                <div className='details-container'>
                    <Card.Meta>
                        {props.postVoteScore}
                    </Card.Meta>
                    <Card.Meta>
                        {props.postTimeStamp}
                    </Card.Meta>
                </div>
            </Card.Content>
            <Card.Content extra>
                <div className='votingContainer'>
                    <AppButton color='green' content='Like'
                     buttonOnClick={props.onLike}/>
                    <AppButton color='red' content='Unlike'
                               buttonOnClick={props.unLike}/>
                </div>
            </Card.Content>
        </Card.Content>
    </Card>
);

export default LongPost;
