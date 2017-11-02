import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts } from '../actions/index';
import Post from './Post';

class Category extends Component {
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
    const { posts } = this.props;
    console.log(posts);
    console.log(this.props.posts);
    return (
      <div>
        { posts ? 
          posts.map((post) => ( 
            <Post author={post.author} title={post.title}
            body={post.body} category={post.category} commentCount={post.commentCount}
            voteScore={post.voteScore} key={post.id}/>
          ))
          : '..Loading'
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { posts } = state;
  console.log(posts);
  return { posts }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCatPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);
