import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatPosts, postingVote } from '../actions/index';
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

    upVote(id,score) {

        console.log('liked it');
        console.log(id);
        this.props.postingVote(id);
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
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.title}</p>
                            <p>{post.voteScore}</p>
                            <button onClick={()=>{this.upVote(post.id, post.voteScore)}}>submit</button>
                        </div>
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
    return bindActionCreators({fetchingCatPosts, postingVote}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostHome);