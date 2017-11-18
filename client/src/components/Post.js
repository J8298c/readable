import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppButton from './shared/AppButton';
import { bindActionCreators } from 'redux';
import {fetchingAPost, likingPost, fetchingComments } from "../actions/index";
import LongPost from './shared/LongPost';
import { Comment } from 'semantic-ui-react'
import CommentForm from './shared/CommentForm'
import Comments from './shared/CommentView';
class Post extends Component {
    constructor(props) {
        super(props);
        this.vote = this.vote.bind(this);
        this.getDate = this.getDate.bind(this);
        this.state = {
            userName: '',
            comment: ''
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id);
        this.props.fetchingAPost(id);
        this.props.fetchingComments(id);
    }

    vote(id, option) {
        console.log(id, 'the id params');
        console.log(option);
        this.props.likingPost(id, option);
    }

    getDate(unixtime){
        let newtimestamp ='';
        let conversion = new Date(unixtime)
        return conversion
    }

    postComment() {
        console.log(this.state)
        this.setState({username: ''})
        this.setState({comment: ''})
    }

    render() {
        let showComment = false;
        console.log(this.props.state.post);
        const { post } = this.props.state;
        const { comments } = this.props.state;
        console.log(comments, 'the comments');
        console.log(post, 'the post');
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
                    <CommentForm />
                {/* <div className='comment-form-container'>
                    <CommentForm userNameChange={(event) => { this.setState({username: event.target.value})}}
                        textAreaChange={(event) => { this.setState({comment: event.target.value})}} />
                        <AppButton content='Submit'
                            color='green' onButtonClick={() => {this.postComment()}} />
                </div>     */}
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
    return bindActionCreators({fetchingAPost, likingPost, fetchingComments}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);