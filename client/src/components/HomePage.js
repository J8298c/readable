import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';
import PostHome from './PostHome';
import _ from 'lodash';

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

  sort(value) {
    let sortedList;
    if(value === 'Date') {
        sortedList = _.sortBy(this.props.state.posts, [{'timestamp': Date}], ['desc'])
        console.log(sortedList);
        return sortedList;
    } 
      sortedList = _.sortBy(this.props.state.posts, [{'voteScore': Number}], ['desc'])
      return sortedList;
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
    let thePosts = this.sort('score');
    return (
      <Card.Group style={styles.center}>
       <div style={styles.divStyle}>
        {
          this.props.state.posts ?
          thePosts.map(post => {
              if(!post.deleted){
                return <PostHome post={post} key={post.id} />
              }
          })
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
