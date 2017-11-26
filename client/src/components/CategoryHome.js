import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchingCategoryPosts} from '../actions/index';
import ShortPost from './shared/ShortPost';
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
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <ShortPost postTitle={post.title} key={post.id} className='home-page-post'
                        postAuthor={post.author} postVoteScore={post.voteScore}
                        postCommentCount={post.commentCount} />
                    </Link>
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