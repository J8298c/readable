import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingAllPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchingAllPosts();
  }
  render() {
    return (
      <div>
        {
          this.props.state.posts ?
          this.props.state.posts.map(post => {
            return (
              <Link to={`/posts/${post.id}`} key={post.id}>
              <div>
                <h2>{post.title}</h2>
                <p>{post.author}</p>
                <div>
                  <p>
                    {post.body}
                  </p>
                </div>
                <div>
                  <p>Comments: {post.commentCount}</p>
                  <p>Post Score: {post.showVote}</p>
                </div>
                <p>Created on: {post.timestamp}</p>
              </div>
            </Link>
            )
          })
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
export default connect(mapStateToProps, { fetchingAllPosts })(HomePage);
