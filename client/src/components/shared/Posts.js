import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import AppButton from './AppButton';
import Scoring from './Scoring';
import {convertDate} from './helper';

class Posts extends Component  {
    // convertDate(timestamp) {
    //     const formatted = new Date(timestamp).toDateString()
    //     console.log(formatted)
    //     return formatted;
    // }
    render(props) {
        console.log(this.props)
        return (
            <div className='homepage-container'>
            <Card.Group className='homepage-posts'>
                {
                    this.props.posts.map(post => (
                        <Card key={post.id}>
                            <Card.Content>
                                <Card.Header>
                                    {post.title}
                                </Card.Header>
                                <Card.Meta>
                                    {post.author}
                                </Card.Meta>
                                <Card.Meta>
                                    {convertDate(post.timestamp)}
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
                                <div>
                                    <div className='post-actions'>
                                        <AppButton content='Comment' size='mini' color='violet'/>
                                        <AppButton content='Delete' size='mini' floated='right' color='red'/>  
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
            </div>
        )
    }
};
export default Posts;