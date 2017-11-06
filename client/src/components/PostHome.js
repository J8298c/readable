import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts } from '../actions/index';
import PostCard from './shared/postcard';

class PostHome extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }
    componentDidMount() {
        //fetch all post for category
       const {name} = this.props.match.params;
       console.log(name);
       this.props.fetchingCatPosts(name);
    }

    upVote() {
        console.log('liked it');
    }

    downVote() {
        console.log('unlike')
    }

    render() {

        return (
            <div>
                {
                    this.props.posts ? 
                    this.props.posts.map(post => (
                        <PostCard postTitle={post.title} postAuthor={post.author} 
                        postBody={post.body} extraClassName='post-extra' postScore={post.voteScore}
                        extrabutton='post-btn-div' buttonColor='green' buttonContent='Like' buttonClick={this.upVote}
                        buttonColorUnlike='red' buttonContentUnLike='Unlike' buttonClickUnlike={this.downVote}
                        />
                    )) :

                    '..Loading'
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { posts } = state;
    console.log(posts)
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCatPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);