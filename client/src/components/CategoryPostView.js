import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { get_category_posts, update_score } from '../actions/post_actions';
import { connect } from 'react-redux';

class CategoryPostView extends Component {
    componentDidMount(props) {
        this.props.get_category_posts(this.props.match.params.category)
    }
    onVote(option, id, type, category) {
        console.log(option, id);
        this.props.update_score(option, id, type, category);
    }
    render() {
        return (
            <div>
                {
                    this.props.posts?
                    this.props.posts.map(post => (
                        <div key={post.id}>
                            <Link to={`/${post.id}`}>
                            <h4>{post.title}</h4>
                            </Link>
                            <div>
                                <p>{post.body}</p>
                            </div>
                            <div>
                                <p>{post.commentCount}</p>
                                <p>{post.timestamp}</p>
                            </div>
                            <div>
                                <p>{post.voteScore}</p>
                                <button onClick={() => this.onVote('upVote', post.id, 'get cats', post.category)}>Like</button>
                                <button onClick={() => this.onVote('downVote', post.id, 'get cats', post.category)}>Unlike</button>
                            </div>
                        </div>
                    )):
                    <div>Seems empty here lets add a post</div>
                }
            </div>
        )
    }
}

function mapStateToProps({posts}) {
    console.log(posts)
    return {
        posts
    }
}

export default connect(mapStateToProps, { get_category_posts, update_score })(CategoryPostView);
