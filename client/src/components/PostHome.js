import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class PostHome extends Component {

  componentDidMount() {
    const { name } = this.props.match.params;
    this.props.fetchingCatPosts(name)
  }

  render() {
    return (
      <div>
          {
            this.props.posts ?
            this.props.posts.map(post => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <h1>{post.title}</h1>
              </Link>
            ))
            :
            '...Loading'
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
  return bindActionCreators({fetchingCatPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);
