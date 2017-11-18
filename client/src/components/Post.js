import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppButton from './shared/AppButton';
import { bindActionCreators } from 'redux';
import {fetchingAPost,fetchingComments } from "../actions/index";
import LongPost from './shared/LongPost';
import { Comment } from 'semantic-ui-react'
import CommentForm from './shared/CommentForm'
import Comments from './shared/CommentView';
import uuid from 'uuid';
class Post extends Component {
    constructor(props) {
        super(props);
        this.vote = this.vote.bind(this);
        this.getDate = this.getDate.bind(this);
        this.postComment = this.postComment.bind(this);
        this.state = {
            userName: '',
            comment: ''
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchingAPost(id);
        this.props.fetchingComments(id);
    }

    vote(id, option) {
        this.props.likingPost(id, option);
    }

    getDate(unixtime){
        let newtimestamp ='';
        let conversion = new Date(unixtime)
        return conversion
    }

    postComment() {
        //post comment to server
        const { userName, comment } = this.state;
        const theComment ={
            id: uuid()
        }
        console.log(theComment)
    }

    render() {
        const { post } = this.props.state;
        const { comments } = this.props.state;
        return (
            <div>
                {
                    post ? <LongPost postVoteScore={post.voteScore}
                            postTitle={post.title} postAuthor={post.author} postBody={post.body}
                            onLike={() => {this.vote(post.id, 'upVote')}}
                                     unLike={()=> { this.vote(post.id, 'downVote')}}
                        />
                        : '...Loading'
                }
                {
                    comments ? comments.map(comment => {
                        return (
                            <Comment.Group>
                                 <Comments commentBody={comment.body} commentAuthor={comment.author} />
                                 
                            </Comment.Group>
                           
                        )
                    }) : 'Be the first to reply'
                }
                <CommentForm 
                    onCommentChange={(event) => { this.setState({ comment: event.target.value})}}
                    onCommentSave={this.postComment} 
                    onAuthorChange={(event) => { this.setState({userName: event.target.value})}}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingAPost, fetchingComments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);