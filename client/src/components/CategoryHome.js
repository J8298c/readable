import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingCategoryPosts } from '../actions/index';
import PostHome from './PostHome';
class CategoryHome extends Component {
    componentDidMount(props) {
        const { category } = this.props.match.params;
    
        this.props.fetchingCategoryPosts(category);
    }

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

export default connect(mapStateToProps, { fetchingCategoryPosts })(CategoryHome);
