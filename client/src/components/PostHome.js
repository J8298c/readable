import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingCatPosts, postingVote } from '../actions/index';


class PostHome extends Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
  }
  componentDidMount() {
    const { name } = this.props.match.params
    this.props.fetchingCatPosts(name);
  }

  likePost(id) {
    console.log(id);
    this.props.postingVote(id)
  }

  render() {
    return (
      <div>
        {
          this.props.posts ?
          this.props.posts.map(post => (
            <div>
            <h1>{post.title}</h1>
            <h6>{post.author}</h6>
            <p>{post.body}</p>
            <div>
              <p>{post.voteScore}</p>
              <button onClick={() => { this.likePost(post.id)}}>Like</button>
            </div>
            </div>
          )) :
          '...Loading'
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { posts } = state;
  console.log(posts)
  return {
    posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCatPosts, postingVote}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);
