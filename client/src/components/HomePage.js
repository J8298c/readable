import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShortPost from './shared/ShortPost';
import { bindActionCreators } from 'redux';
import { fetchingAllPosts } from '../actions/index';
import _ from 'lodash';

class HomePage extends Component {
    componentDidMount() {
        //fetch all posts
        this.props.fetchingAllPosts();
    }
    render() {
        return (
            <div>
                <div className='heading'>
                    <span>
                       <h5>App Title</h5> 
                    </span>
                    <span>
                       <p>Select Box</p> 
                    </span>
                </div>
                    {
                    this.props.posts.map(post => (
                        <ShortPost postTitle={post.title} key={post.id} className='home-page-post'
                            postAuthor={post.author} postVoteScore={post.voteScore}
                            postCommentCount={post.commentCount}
                        />
                    ))
                    }  
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
    return bindActionCreators({fetchingAllPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);