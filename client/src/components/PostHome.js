import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchingPost, deletingPost, postVote, fetchingPostComments } from '../actions/index';
import Post from './shared/Post';
import AppButton from './shared/AppButton';
import MultiPost from './shared/MultiPost';

class PostHome extends Component {
  state ={
    showedit: false,
  }

  componentDidMount(props) {
    this.props.fetchingPost(this.props.match.params.id);
    this.props.fetchingPostComments(this.props.match.params.id)
  }

  deletePost(id) {
    this.props.deletingPost(id);
  }
  onVote(id, option) {
    this.props.postVote(id, option);
  }

  render(props) {
    console.log(this.props);
    return (
      <div className='single-post-container'>
      <div className='grouped-btns'>
      <AppButton content='Delete' color='red'
        onClick={() => {this.deletePost(this.props.state.post.id)}}
      />
       <Link to={`/posts/${this.props.match.params.id }/edit`}><AppButton content='Edit' color='blue'/></Link>
      </div>
        {
          this.props.state.post ?
          <div>
          <Post postId={this.props.state.post.id} postAuthor={this.props.state.post.author}
          postBody={this.props.state.post.body} commentCount={this.props.state.post.commentCount} showVoter={true}
          timestamp={this.props.state.post.timestamp} voteScore={this.props.state.post.voteScore}
          onUpVote={() => {this.onVote(this.props.state.post.id, 'upVote')}}
          onDownVote={() => {this.onVote(this.props.state.post.id, 'downVote')}}
        />
        <MultiPost posts={this.props.state.comments} />
      </div>
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

export default connect(mapStateToProps, { fetchingPost, deletingPost, postVote, fetchingPostComments })(PostHome);
