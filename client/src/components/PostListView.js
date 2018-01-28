import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { get_all_posts, update_score } from '../actions/post_actions';
import { Link } from 'react-router-dom';

class PostListView extends Component {
    componentDidMount() {
        this.props.get_all_posts();
    }
    
    onVote(option, id, type) {
        this.props.update_score(option, id, type);
    }

    render() {
        return (
            <div>
                {
                    this.props.posts ?
                    this.props.posts.map(post => (
                        <div key={post.id}>
                            <Link to={`/${post.category}`}>
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
                                <button onClick={() => this.onVote('upVote', post.id, 'get all')}>Like</button>
                                <button onClick={() => this.onVote('downVote', post.id, 'get all')}>Unlike</button>
                            </div>
                        </div>
                    )):
                    <div>
                        <p>Seems Empty in here</p>
                    </div>
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

export default connect(mapStateToProps, { get_all_posts, update_score })(PostListView);
