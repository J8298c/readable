import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Post from './shared/Post';
import Comment from './shared/Comment';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.onVote = this.onVote.bind(this)
    }

    onVote(id, options) {
        console.log('clicked');
    }

    render(props) {
        return (
            <div>
                <Post 
                    postTitle={this.props.post.title} postAuthor={this.props.post.author}
                    postBody={this.props.post.body} showVote={this.props.showVote}
                />
                <hr />
                <Comment 
                    commentAuthor={this.props.comment.author} commentBody={this.props.comment.body}
                />
            </div>
        )
    }
}
export default PostContainer;