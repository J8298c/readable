import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts } from '../actions/index';

class Posts extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.upVote = this.upVote.bind(this);
  }
  componentDidMount(props) {
    const { name } = this.props.match.params;
    this.props.fetchingCatPosts(name);
  }
  upVote() {
    console.log('upvote meth')
    let score = this.state.posts.voteScore;
    score++
    const newState = Object.assign({}, this.state.posts, {voteScore: score});
    this.setState({posts: newState});
  }
  render() {
    return (
      <div>
      <div>hello</div>
      <button onClick={this.upVote}>Like</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {state}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCatPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
