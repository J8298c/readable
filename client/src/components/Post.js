import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchingAPost, likingPost } from "../actions/index";
import LongPost from './shared/LongPost';

class Post extends Component {
    constructor(props) {
        super(props);
        this.vote = this.vote.bind(this);
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id);
        this.props.fetchingAPost(id);
    }

    vote(id, option) {
        console.log(id, 'the id params');
        console.log(option);
        this.props.likingPost(id, option);
    }


    render() {
        console.log(this.props.state.post);
        const { post } = this.props.state;
        console.log(post);
        return (
            <div>
                {
                    post ? <LongPost postVoteScore={post.voteScore}
                            postTitle={post.title} postAuthor={post.author} postBody={post.body}
                            onLike={() => { this.vote(post.id, 'upVote')} }
                                     unLike={()=> { this.vote(post.id, 'downVote')}}
                        />
                        : '...Loading'
                }

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
    return bindActionCreators({fetchingAPost, likingPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);