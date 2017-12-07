import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingAllPosts } from '../actions/index';
import MultiPost from './shared/MultiPost';
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchingAllPosts();
  }
  render() {
    return (
      <div className='multi-post-container'>
        <MultiPost posts={this.props.state.posts} />
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
export default connect(mapStateToProps, { fetchingAllPosts })(HomePage);
