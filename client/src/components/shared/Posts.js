import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import AppButton from './AppButton';
const Posts = (props) => {
    return (
        <Card.Group>
            {
                props.posts.map(post => (
                    <Card>
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
                            <div>
                                <AppButton/>
                                <AppButton/>
                            </div>
                        </Card.Content>
                    </Card>
                ))
            }
        </Card.Group>
    )
};
export default Posts;