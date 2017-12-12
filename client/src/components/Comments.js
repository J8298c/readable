import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingComments } from '../actions/index';
import { Link } from 'react-router-dom';

const commentStyles = {
    marginTop: '10px',
    border: '1px solid #85f589',
    backgroundColor: '#85f589'
}


class Comments extends Component {
    componentDidMount(props) {
        const {postId} = this.props;
        this.props.fetchingComments(postId);
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
                                    <Link to={`/comments/:id`}>Go To Comment</Link>
                                </Comment.Metadata>
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

export default connect(mapStateToProps, {fetchingComments})(Comments);