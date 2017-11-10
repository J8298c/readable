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

    componentDidMount() {
      const {id} = this.props.match.params;
      this.props.fetchAPost(id)
    }

    upVote(id) {
        console.log(id)
        this.props.postingVote(id);
      }

      render() {
          return (
            <div>
            {
              this.props.state.post ? <Post post={this.props.state.post} onClick={this.upVote} /> : 'Loading'
            }
              </div>
          )
      }
}

function mapStateToProps(state) {
  console.log(state)
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({postingVote, fetchAPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);
