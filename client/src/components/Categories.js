import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Posts from './Posts';
import { fetchingCatPosts } from '../actions/index';

class Categories extends Component {
  constructor(props){
    super(props);
    this.upVote = this.upVote.bind(this);
  }

  componentDidMount(){
    //return dispatch to get post detail
    const { name } = this.props.match.params;
    this.props.fetchingCatPosts(name);
  }

  upVote = (id, score) => {
      console.log(score)
  }

  render(){
    const {posts} = this.props.state;
    console.log(posts, 'the posts');
    return (
      <div>
        {
          posts ?
          posts.map(post => (
            <Posts
              key={post.id} title={post.title} body={post.body}
              voteScore={post.voteScore} author={post.author} commentCount={post.commentCount}
              upVote={this.upVote} id={post.id}
            />
          ))
          :
          '...Loading'
        }
      </div>
    )
  }
}

function mapStateToProp(state) {
  console.log(state);
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingCatPosts}, dispatch);
}

export default connect (mapStateToProp, mapDispatchToProps)(Categories);
