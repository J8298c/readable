import React, { Component } from 'react';
import Create from './shared/Create';
import AppButton from './shared/AppButton';
import AppSelect from './shared/AppSelect';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      body: '',
      category: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { title, author, body, category } = this.state;
    let post = { title, author, body, category };
    console.log(post);
  }

  render() {
    return (
      <div className='create-post-container'>
        <h1>Create New Post</h1>
        <div className='create-select-div'>
          <AppSelect
            onCatChange={ (e, { value }) => this.setState({ category: value })}
          />
        </div>
        <Create
          onTitleChange={(event) => {this.setState({title: event.target.value})}}
          onAuthorChange={(event) => {this.setState({author: event.target.value})}}
          onTextChange={(event) => {this.setState({body: event.target.value})}}
        />
        <div className='create-post-btn'>
          <AppButton onClick={this.onSubmit} color='blue' content='Submit' />
        </div>
      </div>
    )
  }
}
export default CreatePost;
