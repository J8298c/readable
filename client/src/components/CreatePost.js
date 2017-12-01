import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addingAPost } from '../actions/index';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author: '',
            title: '',
            category: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        console.log(formatted)
        return formatted;
    }

    onSubmit() {
        let date = Date.now();
        let timestamp = this.convertDate(date);
        const newPost = {
          id: uuid(),
          title: this.state.title,
          body: this.state.body,
          category: this.state.category,
          author: this.state.author,
          timestamp: timestamp
        }
        console.log(newPost);
        this.props.addingAPost(newPost)
    }
    render() {
        return (
            <div>
                createPost
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
  return bindActionCreators({addingAPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);