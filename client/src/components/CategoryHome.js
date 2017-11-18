import React, {Component} from 'react';
import {connect} from 'react-redux';
import ShortPost from './shared/ShortPost';
import AppButton from './shared/AppButton';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { fetchingCategoryPosts } from '../actions/index';
class CategoryHome extends Component {
    componentDidMount() {
        const { category } = this.props.match.params;
        this.props.fetchingCategoryPosts(category);
    }

    render() {
        return (
            <div>
                <h1>Welcome to the  {this.props.match.params.category} page!</h1>
                <div className='post-container'>
                    {this.props.state.posts ? this.props.state.posts.map(post => (
                       <Link to={`/posts/${post.id}`} key={post.id}>
                           <ShortPost postTitle={post.title} postAuhtor={post.author}
                                postVoteScore={post.voteScore} postTimeStamp={post.timeStamp}
                       /></Link>
                    )) : '...Fetching Posts'
                    }
                </div>
                <AppButton />
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
    return bindActionCreators({fetchingCategoryPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);