import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts, postingVote} from '../actions/index';
import Post from './shared/Post';

class PostHome extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.fetchingCatPosts(name)
  }

  upVote(id) {
    console.log(id)
    this.props.postingVote(id);
  }

  render() {
    return (
      <div>
        {
          this.props.posts ?
          this.props.posts.map(post => (
            <Post key={post.id} title={post.title} id={post.id} body={post.body} upVote={this.upVote} voteScore={post.voteScore} />
          ))
          : '.....Loading'
        }
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  const { posts } = state;
  return {
    posts
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchingCatPosts, postingVote}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);
