import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Grid, Button } from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';
import CardDescription from 'semantic-ui-react/dist/commonjs/views/Card/CardDescription';
import PostHome from './PostHome';

//move to single js file

const styles = {
  center: {
    width: '75%',
    margin: '24px auto'
  },
  divStyle : {
    width: '100%',
    margin: '24px auto'
  }
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
      <Card.Group style={styles.center}>
       <div style={styles.divStyle}>
        {
          this.props.state.posts ?
          this.props.state.posts.map(post => (
              <PostHome post={post} key={post.id} />
          ))
          : null
        }
         </div>
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
