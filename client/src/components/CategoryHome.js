import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchingCategoryPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react'

class CategoryHome extends Component {
  componentDidMount(props) {
    const { category } = this.props.match.params;
    this.props.fetchingCategoryPosts(category);
  }

  render(props) {
    console.log(this.props)
    return (
      <div className='multi-post-container'>
        <Card.Group>
          {
            this.props.state.posts ?
            this.props.state.posts.map(post => {
              return (
                <Card key={post.id}>
                  <Card.Content>
                    <Link to={`/posts/${post.id}`}>
                    <Card.Header>{post.title}</Card.Header>
                    </Link>
                    <Card.Meta>{post.author}</Card.Meta>
                    <Card.Description>
                        {post.body}
                    </Card.Description>
                    <Card.Meta>
                      <p>Comments: {post.commentCount}</p>
                      <p>Post Score: {post.voteScore}</p>
                      <p>Created on: {post.timestamp}</p>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              )
            })
            : null
          }
        </Card.Group>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps,{fetchingCategoryPosts})(CategoryHome);
