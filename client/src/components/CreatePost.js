import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state= {
            title: '',
            author: '',
            body: '',
            category: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit() {
        //do somehting with a post request here
        //then push user backl to home page
    }
    render() {
        return (
            <Form>
                <Form.Group width="equals">
                <Form.Input 
                label='Post Title' placeholder='enter post title' onChange={(event) => { this.setState({title: event.target.value})}} />
                </Form.Group>
            </Form>
        )
    }
}
export default CreatePost;