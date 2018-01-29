import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addNewPost } from '../actions/index';
import uuid from 'uuid';

const fontStyle = { 
    color: '#85f589',
    textAlign: 'center'
}

const formStyle = {
    width: '75%',
    margin: '0 auto',
    color: '#ee82c3'
}

const buttonStyle ={
    margin: '24px auto',
    display: 'block',
    backgroundColor: '#85f589',
    color: '#ee82c3'
}

class CreatePost extends Component {
    componentDidMount() {
        //do something
    }
    state = {
        title: '',
        author: '',
        body: '',
        category: ''
    }
    onSubmit = () => {
        const {  author, body } = this.state;
        const id = uuid();
        const timestamp = Date.now();
        const post = {id,  author, body, timestamp };
        this.props.addNewPost(post, 'comment');
    }

    render() {
        return (
            <div>
                <h1 style={fontStyle}>Create a New Post</h1>
                <Form style={formStyle}>
                    <Form.Input 
                        placeholder='Enter a authors name' label='Post Author' 
                            onChange={(event) => { this.setState({ author: event.target.value})}}
                            />
                    <Form.TextArea placeholder='Enter your post' label='Post' 
                        onChange={(event) => { this.setState({body: event.target.value})}}
                        />
                </Form>
                <Form.Field onClick={ this.onSubmit} control={Button} style={buttonStyle}>Submit</Form.Field>
            </div>
        )
    }
}

export default connect(null, { addNewPost })(CreatePost);