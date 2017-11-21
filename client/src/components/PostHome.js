import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingAPost, likingPost } from '../actions/index';
import { Grid } from 'semantic-ui-react';
import LongPost from './shared/LongPost';
import AppButton from './shared/AppButton';
class PostHome extends Component {
    constructor(props){
        super(props);
        this.convertDate = this.convertDate.bind(this);
        this.onVote = this.onVote.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchingAPost(id);
    }

    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        return formatted;
    }
    onVote(id, option){
        console.log(this.props)
        this.props.likingPost(id, option);
    }

    render() {
        console.log(this.props.state.post);
        const { post } = this.props.state;
        return (
            <div>
                {
                    post ? 
                        <div key={post.id}>
                            <LongPost postTitle={post.title} postBody={post.body} 
                        postVoteScore={post.voteScore} postTimeStamp={this.convertDate(post.timestamp)}
                        postAuthor={post.author} handleUpVote={() => { this.onVote(post.id, 'upVote')}}
                        handleDownVote={()=>{this.onVote(post.id, 'downVote')} }
                            />
                        </div>  : 'Fetching Post'
                } 
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
    return bindActionCreators({fetchingAPost, likingPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);