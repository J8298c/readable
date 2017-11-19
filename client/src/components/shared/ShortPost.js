import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

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
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column>
                           <Card.Meta>
                            {props.postVoteScore}
                            </Card.Meta> 
                        </Grid.Column>
                        <Grid.Column>
                           <Card.Meta>
                            {props.postCommentCount}
                        </Card.Meta> 
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Meta>
                            {props.postTimeStamp}
                        </Card.Meta>    
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
               
            </Card.Content>
        </Card> 
    </Card.Group>
    </div>
)
export default ShortPost;