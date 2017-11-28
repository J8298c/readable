import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingAPost, likingPost, fetchingComments, addingAComment } from '../actions/index';
import { Form, Card, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LongPost from './shared/LongPost';
import Posts from './shared/Posts'
import ShortPost from './shared/ShortPost';
import AppButton from './shared/AppButton';
import Scoring from './shared/Scoring';

import _ from 'lodash';
import uuid from 'uuid';
import { convertDate } from './shared/helper';


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
      const date = Date.now();
      let timestamp = this.convertDate(date);

      const newPost = {
        author: this.state.commentAuthor,
        body: this.state.commentBody,
        id: uuid(),
        parentId: this.props.match.params.id,
        timestamp: timestamp
      }
      this.props.addingAComment(newPost)
    }

    render() {
        console.log(this.props.state.post);
        const { post, comments } = this.props.state;
        return (
            <div>
                <div className='post-container'>
                    {
                        post ?
                        <Card key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                        <Card.Content>
                            <Card.Header>
                                {post.title}
                            </Card.Header>
                            <Card.Meta>
                                {post.author}
                            </Card.Meta>
                            <Card.Meta>
                                {convertDate(post.timestamp)}
                            </Card.Meta>
                            <Card.Description>
                                {post.body}
                            </Card.Description>
                            <Card.Meta>
                                <Grid columns={2}>
                                    <Grid.Row>
                                        <Grid.Column>
                                            Score: {post.voteScore}
                                        </Grid.Column>
                                        <Grid.Column>
                                            Comment: {post.commentCount}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Card.Meta>
                        </Card.Content>
                        </Link>
                        <Card.Content extra>
                            <div>
                                  <Scoring post={post}/> 
                                <div className='post-actions'>
                                    <AppButton content='Comment' size='mini' color='violet'/>
                                    <AppButton content='Delete' size='mini' floated='right' color='red'/>  
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                            : 'Loading'
                    }
                    <AppButton content='edit' color='pink' className='edit-post'/>
                </div>
                <h1>Comments</h1>
                <hr />
                <div className='comment-container'>
                    {
                        comments ? comments.map(comment => (
                          <Link to={`/comments/${comment.id}`} key={comment.id}>
                            <ShortPost postBody={comment.body} postTitle={comment.title} postAuthor={comment.author}
                              postVoteScore={comment.voteScore} postTimeStamp={this.convertDate(comment.timestamp)} className='card-containers'
                              />
                          </Link>
                        )) : 'No Comments yet'
                    }
                </div>
                <AppButton  content='comment' className='edit-post'
                  onButtonClick={() => { !this.state.showForm ? this.setState({showForm: true}) : this.setState({showForm: false})}}/>
                {
                  this.state.showForm ?
                  <div className="create-comment">
                   <Form>
                    <Form.Group>
                        <Form.Input label='author' placeholder='Enter a Author' onChange={(event) => { this.setState({commentAuthor: event.target.value})}} />
                    </Form.Group>
                    <Form.TextArea label='comment' placeholder='Enter your comment....' onChange={(event) => { this.setState({commentBody: event.target.value})}}/>
                    </Form>
                    <AppButton content="submit" onButtonClick={this.commentSubmit} color='pink' className='app-btn submit-btn'/>
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
    return bindActionCreators({fetchingAPost, likingPost, fetchingComments, addingAComment}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostHome);