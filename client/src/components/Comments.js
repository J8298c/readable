import React, { Component } from 'react';
import {Button, Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingComments, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

const commentStyles = {
    marginTop: '8px',
    border: '1px solid #85f589',
    backgroundColor: '#85f589'
}
const linkStyle ={
    marginLeft: '20px'
}

const buttonGroups = {
    position: 'relative',
    top: '-43px'
}


class Comments extends Component {
    componentDidMount(props) {
        const {postId} = this.props;
        this.props.fetchingComments(postId);
    }

    onDelete = (id, type) => {
        this.props.deletePost(id, type)
      }

    render() {
        return (
            <div>
                {
                    this.props.state.comments ?
                    this.props.state.comments.map(comment => (

                        <Comment key={comment.id} style={commentStyles}>
                            <Comment.Content>
                                <Comment.Author>
                                    {comment.author}
                                </Comment.Author>
                                <Comment.Text>
                                    {comment.body}
                                </Comment.Text>
                                <Comment.Metadata>
                                    <p>Likes: {comment.voteScore}</p>
                                    <p>Posted: {comment.timestamp}</p>
                                    <Link to={`/comments/${comment.id}`}>Go To Comment</Link>

                                    <Link to={`/${this.props.postId}/new_comment`} style={linkStyle}>
                                        Add Comment
                                    </Link>
                                </Comment.Metadata>
                                <Button.Group floated='right' style={buttonGroups}>
                                    <Link to={`/edit/${comment.id}`}><Button color='yellow' content='Edit'
                                        /></Link>
                                        <Button.Or />
                                        <Button color='orange' content='Delete'
                                            onClick={() => { this.onDelete(comment.id, 'comment')}}
                                        />
                                    </Button.Group>
                            </Comment.Content>
                        </Comment>

                    ))
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

export default connect(mapStateToProps, {fetchingComments, deletePost})(Comments);
