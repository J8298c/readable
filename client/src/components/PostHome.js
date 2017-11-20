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
        this.props.likingPost(id, option);
    }

    render() {
        return (
            <div>
                {
                        this.props.state.posts.map(post => (
                            <div>
                                 <LongPost postTitle={post.title} postBody={post.body}
                        postVoteScore={post.voteScore} postTimeStamp={this.convertDate(post.timestamp)}
                        postAuthor={post.author} />
                        <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <AppButton color='blue' content='Like' onClick={() => {this.onVote(post.id, 'upVote')}}/>
                            </Grid.Column>
                            <Grid.Column>
                            <AppButton color='red' content='UnLike' onClick={() => {this.onVote(post.id, 'downVote')}}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid> 
                            </div> 
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
    return bindActionCreators({fetchingAPost, likingPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);