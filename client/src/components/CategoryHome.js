import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingCategoryPosts, votingOnPost } from '../actions/index';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const center = {
  width: '75%',
  margin: '24px auto'
}

class CategoryHome extends Component {
    componentDidMount(props) {
        const { category } = this.props.match.params
        this.props.fetchingCategoryPosts(category);
    }

    onVote = (id, option, type) => {
      this.props.votingOnPost(id, option, type);
    }

    render() {
        return (
            <Card.Group>
                {
                  this.props.state.catposts ?
                  this.props.state.catposts.map(post => (
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
                          onClick={() => {this.onVote(post.id, 'upVote',
                        'catposts')}} />
                          <Button.Or />
                          <Button color='red' content='UnLike'
                          onClick={() => {this.onVote(post.id, 'downVote', 'catposts')}} />
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
  console.log(state);
    return {
        state
    }
}
export default connect(mapStateToProps, { fetchingCategoryPosts, votingOnPost })(CategoryHome);
