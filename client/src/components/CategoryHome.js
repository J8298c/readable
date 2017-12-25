import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingCategoryPosts, votingOnPost } from '../actions/index';
import { Card, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PostHome from './PostHome';

const center = {
  width: '75%',
  margin: '24px auto'
}

class CategoryHome extends Component {
    componentDidMount(props) {
        const { category } = this.props.match.params
        this.props.fetchingCategoryPosts(category);
        console.log('mounting again')
    }

    onVote = (id, option, type) => {
      this.props.votingOnPost(id, option, type);
    }

    render() {
        return (
            <Card.Group>
                {
                  this.props.catposts ?
                  this.props.catposts.map(post => (
                   <PostHome post={post} />
                  ))
                  : null
                }
            </Card.Group>
        )
    }
}
function mapStateToProps(state) {
    const { catposts } = state
    return {
        catposts
    }
}
export default connect(mapStateToProps, { fetchingCategoryPosts, votingOnPost })(CategoryHome);
