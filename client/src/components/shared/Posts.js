import React from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import AppButton from './AppButton';
const Posts = (props) => {
    return (
        <div className='homepage-container'>
        <Card.Group className='homepage-posts'>
            {
                props.posts.map(post => (
                    <Card key={post.id}>
                        <Card.Content>
                            <Card.Header>
                                {post.title}
                            </Card.Header>
                            <Card.Meta>
                                {post.author}
                            </Card.Meta>
                            <Card.Description>
                                {post.body}
                            </Card.Description>
                            <Card.Meta>
                                <Grid columns={2}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            Score: {post.voteScore}
                                        </Grid.Column>
                                        <Grid.Column>
                                            Comment: {post.commentCount}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            //refactor buttons
                            <div>
                                <Button.Group fluid>
                                <AppButton content='Like' size='mini'color='green' onButtonClick={props.onUpVote}/>
                                <Button.Or /> 
                                <AppButton content='Unlike' size='mini' color='red' onButtonClick={props.onDownVote}/>
                                </Button.Group>
                                <div className='post-actions'>
                                  <AppButton content='Comment' size='mini'/>
                                    <AppButton content='Delete' size='mini' floated='right'/>  
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                ))
            }
        </Card.Group>
        </div>
    )
};
export default Posts;