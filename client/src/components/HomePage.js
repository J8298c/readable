import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';

//move to single js file
const center = {
  width: '75%',
  margin: '24px auto'
}

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchingAllPosts();
  }
  onVote = (id, option) => {
    console.log(id, 'the id')
    console.log(option, 'the option');
  }
  render() {
    return (
      <Card.Group>
        {
          this.props.state.posts ?
          this.props.state.posts.map(post => (
            <Card key={post.id} style={center}>
            <Card.Content>
             <Link to={`/post/${post.id}`}><Card.Header>{post.title}</Card.Header></Link>
              <Card.Meta>{post.author}</Card.Meta>
              <Card.Description>{post.body}</Card.Description>
              <Card.Meta>
                <p>Comments: {post.commentCount}</p>
                <p>Score: {post.voteScore}</p>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button.Group style={center}>
                <Button color='green' content='Like'
                  onClick={() => {this.onVote(post.id, 'upVote')}} />
                  <Button.Or />
                  <Button color='red' content='UnLike'
                  onClick={() => {this.onVote(post.id, 'downVote')}} />
              </Button.Group>
            </Card.Content>
          </Card>
          ))
          : null
        }
      </Card.Group>
    )
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, {fetchingAllPosts})(HomePage);
