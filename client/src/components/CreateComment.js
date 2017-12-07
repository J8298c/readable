import React, { Component } from 'react';
import Create from './shared/Create';
import AppButton from './shared/AppButton';
import { connect } from 'react-redux';
import { addNewComment } from '../actions/index';

class CreateComment extends Component {
  state = {
    body: '',
    author: '',
  }

  onSubmit() {
    const {  author, body, } = this.state;
    const id = uuid();
    const timestamp = Date.now();
    let post = {  author, body, id, timestamp };
    this.props.addNewComment(comment);
  }

  render(props) {
    return (
      <div>
        <Create authorplaceholder='Comment Author' onAuthorChange={(event) => {this.setState({author: event.target.value})}}
            onTextChange={(event) => { this.setState({body: event.target.value})}} />
            <AppButton
              content='Submit' color='blue' onClick={() => { this.onSubmit}}
            />
      </div>
    )
  }
}

export default connect(null, { addNewComment })(CreateComment);
