import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingCategoryPosts } from '../actions/index';
class CategoryHome extends Component {
    componentDidMount() {
        console.log(this.props.match.params)
        const { category } = this.props.match.params;
        console.log(category, 'the category');
        this.props.fetchingCategoryPosts(category);
    }

    render() {
        return (
            <div>
                CategoryHome 
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategoryPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);