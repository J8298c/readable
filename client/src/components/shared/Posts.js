import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import AppButton from './AppButton';
import Scoring from './Scoring';
import {convertDate} from './helper';
import {Link} from 'react-router-dom';

class Posts extends Component  {
    render(props) {
        console.log(this.props)
        return (
            <div className='homepage-container'>
                {
                        <Card key={this.props.postid}>
                            <Link to={`/posts/${this.props.postid}`}>
                            <Card.Content>
                                <Card.Header>
                                    {this.props.posttitle}
                                </Card.Header>
                                <Card.Meta>
                                    {this.props.postauthor}
                                </Card.Meta>
                                <Card.Meta>
                                    {convertDate(this.props.posttimestamp)}
                                </Card.Meta>
                                <Card.Description>
                                    {this.props.postbody}
                                </Card.Description>
                                <Card.Meta>
                                    <Grid columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                Score: {this.props.postvoteScore}
                                            </Grid.Column>
                                            <Grid.Column>
                                                Comment: {this.props.postcommentCount}
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Card.Meta>
                            </Card.Content>
                            </Link>
                            <Card.Content extra>
                                <div>
                                <Scoring postid={this.props.postid}/>
                                    <div className='post-actions'>
                                        <AppButton content='Comment' size='mini' color='violet'/>
                                        <AppButton content='Delete' size='mini' floated='right' color='red'/>  
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>
                }
            </div>
        )
    }
};
export default Posts;