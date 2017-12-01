import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchingCategoryPosts} from '../actions/index';


class CategoryHome extends Component {
    componentDidMount() {
       console.log(this.props)
       const { category } = this.props.match.params;
       this.props.fetchingCategoryPosts(category)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                categoryhome
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategoryPosts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);