import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingPost, votingOnPost, fetchingComments, deletePost } from '../actions/index';
import Comments from './Comments';
import Post from './shared/Post';


class PostHome extends Component {
    componentDidMount(props) {
        const { id } = this.props.match.params;
        this.props.fetchingPost(id);
        this.props.fetchingComments(id);
    }

    onVote = (id, option, type) => {
        this.props.votingOnPost(id, option, type);
    }

     onDelete = (id) => {
        this.props.deletePost(id)
    }

    render() {
        return (
            <div>
            {
                this.props.state.post ?
                <Post posttitle={this.props.state.post.title}
                  postauthor={this.props.state.post.author}
                  posttitle={this.props.state.post.title}
                  postvoteScore={this.props.state.post.voteScore}
                  upVote={()=> { this.onVote(this.props.state.post.id, 'upVote', 'post')}}
                  downVote={() => { this.onVote(this.props.state.post.id, 'downVote', 'post')}}
                  postid={this.props.state.post.id}
                  onDelete={() => { this.onDelete(this.props.state.post.id)}}
                />
                : null
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
export default connect(mapStateToProps, {fetchingPost, votingOnPost, fetchingComments, deletePost})(PostHome);
