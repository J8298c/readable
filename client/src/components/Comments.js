import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchingAComment, likingComment } from '../actions/index';
import LongPost from './shared/LongPost';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onVote = this.onVote.bind(this);
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchingAComment(id)
    //fetch usoing ID;
  }
  onVote(id, option){
      console.log(this.props)
      this.props.likingComment(id, option);
  }
  render(){
    console.log(this.props.state.comment)
    return (
      <div>
        {
          this.props.state.comment ?
          <LongPost postTitle={this.props.state.comment.title}
            postAuthor={this.props.state.comment.author}
            postBody={this.props.state.comment.body}
            postVoteScore={this.props.state.comment.voteScore}
            handleUpVote={() => { this.onVote(this.props.state.comment.id,'upVote')}}
            handleDownVote={() => { this.onVote(this.props.state.comment.id,'downVote')}} />
            : 'Fetching yours comment'
        }
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchingAComment, likingComment}, dispatch)
}

function mapStateToProps(state) {
  console.log(state);
  return {
    state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
