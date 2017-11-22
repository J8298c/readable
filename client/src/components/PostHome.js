import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingAPost, likingPost, fetchingComments } from '../actions/index';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LongPost from './shared/LongPost';
import ShortPost from './shared/ShortPost';
import AppButton from './shared/AppButton';
import CreateComment from './shared/ModifyPost';


class PostHome extends Component {
    constructor(props){
        super(props);
        this.state = {
          showForm: false,
          commentAuthor: '',
          commentBody: ''
        }
        this.convertDate = this.convertDate.bind(this);
        this.onVote = this.onVote.bind(this);
        this.commentSubmit = this.commentSubmit.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchingAPost(id);
        this.props.fetchingComments(id);
    }

    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        return formatted;
    }
    onVote(id, option){
        console.log(this.props)
        this.props.likingPost(id, option);
    }
    commentSubmit(){
      console.log('helloooooooo')
    }

    render() {
        console.log(this.props.state.post);
        const { post, comments } = this.props.state;
        return (
            <div>
                <div>
                    <AppButton content='edit' color='pink'/>
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
                <h1>Comments</h1>
                <hr />
                <div>
                    {
                        comments ? comments.map(comment => (
                          <Link to={`/comments/${comment.id}`}>
                            <ShortPost key={comment.id} postBody={comment.body} postTitle={comment.title} postAuthor={comment.author}
                              postVoteScore={comment.voteScore} postTimeStamp={this.convertDate(comment.timestamp)}
                              />
                          </Link>
                        )) : 'No Comments yet'
                    }
                </div>
                <AppButton  content='comment'
                  onButtonClick={() => { !this.state.showForm ? this.setState({showForm: true}) : this.setState({showForm: false})}}/>
                {
                  this.state.showForm ?
                  <div>
                    <CreateComment
                        authorLabel='username' onAuthorChange={(event) => { this.setState({commentAuthor: event.target.value})}}
                        onPostChange={(event) => { this.setState({commentBody: event.target.value})}}
                    />
                    <AppButton content="submit" onButtonClick={this.commentSubmit} />
                  </div>
                  : null
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
    return bindActionCreators({fetchingAPost, likingPost, fetchingComments}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);
