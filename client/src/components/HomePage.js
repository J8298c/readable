import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';
import CardDescription from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';
import PostHome from './PostHome';

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
            <PostHome post={post} />
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
