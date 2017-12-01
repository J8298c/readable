import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAllPosts, likingPost } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.convertDate = this.convertDate.bind(this);
    }
    componentDidMount() {
        //fetch all posts
        this.props.fetchingAllPosts();
    }
    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        return formatted;
    }
    render() {
        return (
            <div>
                HomePage
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return (
        state
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingAllPosts, likingPost}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);