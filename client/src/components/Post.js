import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postingVote } from '../actions/index';
class Post extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
    }
    upVote(id) {
        console.log(id)
        this.props.postingVote(id);
      }

      render() {
          console.log(this.props)
          return (
              <div>
                  The Post
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
    return bindActionCreators({postingVote}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);