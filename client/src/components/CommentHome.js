import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAComment, votingOnPost } from '../actions/index';

const commentStyle = {
    width: '75%',
    color: '#85f589',
    backgroundColor: '#ee82c3',
    margin: '24px auto',
}

const hrStyle = {
    width: '80%',
    marginTop: '10px',
    marginBottom: '10px'
}

const commentFont = {
    color: '#85f589'
}


class CommentHome extends Component {
  componentDidMount(props) {
    const { id } = this.props.match.params;
    this.props.fetchAComment(id);
  }

  onVote = (id, option, type) => {
    this.props.votingOnPost(id, option, type);
  }

  onDelete = (id) => {
    console.log(id)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.state.comment ?
          <Card style={commentStyle}>
              <Card.Content style={commentFont}>
                  <Card.Meta>{this.props.state.comment.author}</Card.Meta>
                  <Card.Description>{this.props.state.comment.body}</Card.Description>
                  <Card.Meta>
                     Score: {this.props.state.comment.voteScore}
                  </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                  <Button.Group>
                      <Button color='green' content='Like'
                      onClick={() => {this.onVote(this.props.state.comment.id, 'upVote', 'comment')}} />
                      <Button.Or />
                      <Button color='red' content='UnLike'
                      onClick={() => {this.onVote(this.props.state.comment.id, 'downVote', 'comment')}} />
                  </Button.Group>
                  <Button.Group floated='right'>
                  <Link to={`/edit/${this.props.state.comment.id}`}><Button color='yellow' content='Edit'
                       /></Link>
                      <Button.Or />
                      <Button color='orange' content='Delete'
                          onClick={() => { this.onDelete(this.props.state.comment.id)}}
                       />
                  </Button.Group>
                </Card.Content>
          </Card>
          : null
        }
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
export default connect(mapStateToProps, { fetchAComment, votingOnPost })(CommentHome);
