import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';
import CardDescription from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';

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
  convertDate(date) {
    const newDate = new Date(date);
    let month = newDate.getMonth();
    let day = newDate.getDay();
    let year = newDate.getFullYear();
    let formattedTime = month + '/' + day + '/' + year;
    return formattedTime;
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
                <p>Created: {this.convertDate(post.timestamp)}</p>
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
