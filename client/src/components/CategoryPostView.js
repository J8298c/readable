import React, { Component } from "react";
import { get_category_posts } from '../actions/post_actions';
import { connect } from 'react-redux';

class CategoryPostView extends Component {
    componentDidMount(props) {
        this.props.get_category_posts(this.props.match.params.category)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                CategoryPostView
            </div>
        )
    }
}

function mapStateToProps({posts}) {
    console.log(posts)
    return {
        posts
    }
}

export default connect(mapStateToProps, { get_category_posts })(CategoryPostView);
