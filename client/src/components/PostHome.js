import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingPost, deletingPost } from '../actions/index';
import Post from './shared/Post';
import AppButton from './shared/AppButton';

class PostHome extends Component {
  state ={
    showedit: false,
  }
  
  componentDidMount(props) {
    this.props.fetchingPost(this.props.match.params.id);
  }

  deletePost(id) {
    console.log(id);
    this.props.deletingPost(id);
  }

  render(props) {
    console.log(this.props);
    return (
      <div className='single-post-container'>
      <div className='grouped-btns'>
      <AppButton content='Delete' color='red' 
        onClick={() => {this.deletePost(this.props.state.post.id)}}
      />
       <AppButton content='Edit' color='blue' 
        onClick={() => {this.deletePost(this.props.state.post.id)}}
      />
      </div>
        {
          this.props.state.post ?
          <Post postId={this.props.state.post.id} postAuthor={this.props.state.post.author} 
          postBody={this.props.state.post.body} commentCount={this.props.state.post.commentCount} showVote={this.props.state.post.showVote}
          timestamp={this.props.state.post.timestamp} />
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

export default connect(mapStateToProps, { fetchingPost, deletingPost })(PostHome);
