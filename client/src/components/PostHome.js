import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts } from '../actions/index';


class PostHome extends Component {
    componentDidMount() {
        //fetch all post for category
       const {name} = this.props.match.params;
       console.log(name);
       this.props.fetchingCatPosts(name);
    }

    render() {

        return (
            <div>
                PostHome
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
    return bindActionCreators({fetchingCatPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);