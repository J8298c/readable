import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingCategoryPosts } from '../actions/index';

class CategoryHome extends Component {
    componentDidMount(props) {
        const { category } = this.props.match.params
        this.props.fetchingCategoryPosts(category);
    }
    render() {
        return (
            <div>
                {
                    <h1>{this.props.match.params.category}</h1>
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
