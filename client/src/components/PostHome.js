import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingPost } from '../actions/index';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostHome extends Component {
  componentDidMount(props) {
    console.log(this.props)
    this.props.fetchingPost(this.props.match.params.id);
  }

  render(props) {
    console.log(this.props);
    return (
      <div className='single-post-container'>
        {
          this.props.state.post ?
          <Card>
            <Card.Content>
              <Link to={`/posts/${this.props.state.post.id}`}>
              <Card.Header>{this.props.state.post.title}</Card.Header>
              </Link>
              <Card.Meta>{this.props.state.post.author}</Card.Meta>
              <Card.Description>
                  {this.props.state.post.body}
              </Card.Description>
              <Card.Meta>
                <p>Comments: {this.props.state.post.commentCount}</p>
                <p>Post Score: {this.props.state.post.showVote}</p>
                <p>Created on: {this.props.state.post.timestamp}</p>
              </Card.Meta>
            </Card.Content>
          </Card>
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

export default connect(mapStateToProps, { fetchingPost })(PostHome);
