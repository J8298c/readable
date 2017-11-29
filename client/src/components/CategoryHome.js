import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchingCategoryPosts} from '../actions/index';
import Posts from './shared/Posts';
import { convertDate} from './shared/helper';

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
            {
               this.props.state.posts.map(post => (
                <Posts posttitle={post.title} postid={post.id} postauthor={post.author} posttimestamp={convertDate(post.timestamp)}
                postbody={post.body} postvoteScore={post.voteScore} postcommentCount={post.commentCount} key={post.id}/>
            ))
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategoryPosts}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);