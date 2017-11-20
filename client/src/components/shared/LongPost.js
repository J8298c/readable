import React from 'react';
import { Header, Message, Grid } from 'semantic-ui-react'
const LongPost = (props) => (
    <div>
        <Header as='h1' textAlign='center'>{props.postTitle}</Header>
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
            </Grid>
        </Message>
    </div>
)
export default LongPost;