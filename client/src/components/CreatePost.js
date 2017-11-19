import React, { Component } from 'react';
import ModifyPost from './shared/ModifyPost';
import AppButton from './shared/AppButton';
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
    onSubmit() {
        //submit post
        console.log(this.state);
    }
    render() {
        const options = [{key: 'react', value: 'react', text: 'React'}, {key: 'redux', value: 'redux', text: 'Redux'}, {key: 'udacity', value: 'udacity', text: 'udacity'}];
        return (
            <div>
                <ModifyPost titleLabel='Post Title' 
                onTitleChange={(event) => { this.setState({title: event.target.value})}} 
                authorLabel='Post Author'
                onAuthorChange={(event) => { this.setState({author: event.target.value})}}
                options={options}  onCatSelect={(event) => {this.setState({category: event.target.getAttribute('value')})}}
                onPostChange={(event) => {this.setState({body: event.target.value})}}
                />
                <AppButton  color='blue' content='Save' onButtonClick={this.onSubmit} />
            </div>
        )
    }

}
export default CreatePost;