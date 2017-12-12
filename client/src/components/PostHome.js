import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchingPost, votingOnPost, fetchingComments, deletePost } from '../actions/index';
import Comments from './Comments';

const postStyle = {
    width: '75%',
    color: '#85f589',
    backgroundColor: '#ee82c3',
    margin: '24px auto',
}

const hrStyle = {
    width: '80%',
    marginTop: '10px',
    marginBottom: '10px'
}

const postFont = {
    color: '#85f589'
}
class PostHome extends Component {
    componentDidMount(props) {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.fetchingPost(id);
        this.props.fetchingComments(id);
    }

    onVote = (id, option) => {
        console.log(id, option);
        this.props.votingOnPost(id, option);
    }

     onDelete = (id) => {
        console.log(id);
        this.props.deletePost(id)
    }

    render() {
        console.log(this.props.state.comments);
        return (
            <div>
            {
                this.props.state.post ?

                    <Card style={postStyle}>
                        <Card.Content style={postFont}>
                            <Card.Header>{this.props.state.post.title}</Card.Header>
                            <Card.Meta>{this.props.state.post.author}</Card.Meta>
                            <Card.Description>{this.props.state.post.body}</Card.Description>
                            <Card.Meta>
                               Score: {this.props.state.post.voteScore} 
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group>
                                <Button color='green' content='Like' 
                                onClick={() => {this.onVote(this.props.state.post.id, 'upVote')}} />
                                <Button.Or />
                                <Button color='red' content='UnLike' 
                                onClick={() => {this.onVote(this.props.state.post.id, 'downVote')}} />
                            </Button.Group>
                            <Button.Group floated='right'>
                            <Link to={`/edit/${this.props.state.post.id}`}><Button color='yellow' content='Edit' 
                                 /></Link>
                                <Button.Or />
                                <Button color='orange' content='Delete'
                                    onClick={() => { this.onDelete(this.props.state.post.id)}} 
                                 />
                            </Button.Group>
                            <p>Replies</p>
                            <hr style={hrStyle}/>
                            <Card.Content extra>
                                <Comments postId={this.props.state.post.id} />
                            </Card.Content>
                        </Card.Content>
                    </Card> 
                : null
            }   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}
export default connect(mapStateToProps, {fetchingPost, votingOnPost, fetchingComments, deletePost})(PostHome);