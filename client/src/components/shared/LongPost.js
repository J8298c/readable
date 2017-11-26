import React from 'react';
import { Header, Message, Grid } from 'semantic-ui-react'
import AppButton from './AppButton';

const LongPost = (props) => (
    <div className='post-container'> 
        <Header className='header-post' as='h1' textAlign='center'>{props.postTitle}</Header>
        <div className='post-body'>
        <Message>
            <p>{props.postBody}</p>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        {props.postVoteScore}
                    </Grid.Column>
                    <Grid.Column>
                        {props.postTimeStamp}
                    </Grid.Column>
                    <Grid.Column>
                        {props.postAuthor}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                            <Grid.Column>
                            <AppButton color='blue' content='Like' onButtonClick={props.handleUpVote}/>
                            </Grid.Column>
                            <Grid.Column>
                            <AppButton color='red' content='UnLike' onButtonClick={props.handleDownVote}/>
                            </Grid.Column>
                 </Grid.Row>
            </Grid>
        </Message>
        </div>
    </div>
)
export default LongPost;