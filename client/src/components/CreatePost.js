import React, { Component } from 'react';
import ModifyPost from './shared/ModifyPost';
import AppButton from './shared/AppButton';
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
        const options = [{key: 'react', value: 'react', text: 'React'}, {key: 'redux', value: 'redux', text: 'Redux'}, {key: 'udacity', value: 'udacity', text: 'udacity'}];
        return (
            <div>
                <ModifyPost titleLabel='Post Title' className='creat-post-container'
                onTitleChange={(event) => { this.setState({title: event.target.value})}}
                authorLabel='Post Author'
                onAuthorChange={(event) => { this.setState({author: event.target.value})}}
                options={options}  onCatSelect={(event) => {this.setState({category: event.target.value})}}
                onPostChange={(event) => {this.setState({body: event.target.value})}}
                />
                <AppButton  color='pink' content='Save' onButtonClick={this.onSubmit} />
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