import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postingVote, fetchAPost } from '../actions/index';
import PostCard from './shared/PostCard';
class Post extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
    }

    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.fetchAPost(id)
    }

    upVote(id) {
        console.log(id)
        this.props.postingVote(id);
      }

      render() {
          console.log(this.props)
          return (
              <div>
                  {
                      this.props.post ?
                      <Post 
                      onClick={()=> { this.upVote(this.props.post.id)}}
                      body={this.props.post.body} title={this.props.post.title}
                      author={this.props.author} score={this.props.post.voteScore}
                      />
                      :
                      'Loading'
                  }
              </div>
          )
      }
}

function mapStateToProps(state) {
    const { post } = state;
    return {
        post
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postingVote, fetchAPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);