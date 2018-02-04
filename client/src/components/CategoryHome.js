import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingCategoryPosts, isLoading } from '../actions/index';
import PostHome from './PostHome';
import LoadingScreen from './Loader'

class CategoryHome extends Component {
    render(props) {
        return (
            <div>
                {
                    this.props.state.catposts ?
                    this.props.state.catposts.map(post => (
                        <PostHome post={post} key={post.id} />
                    )) :
                    'Seems empty here Why not create a post'
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

export default connect(mapStateToProps, { fetchingCategoryPosts, isLoading })(CategoryHome);
