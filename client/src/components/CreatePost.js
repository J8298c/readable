import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            body: '',
            category: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        //submit new post
        console.log(this.state)
    }
    render() {
        return (
            <div>
              <Form>
                <Form.Group widths="equal">
                    <Form.Input label='Title' placeholder='Add a post title' 
                    onChange={(event) => { this.setState({title: event.target.value})}} />
                    <Form.Input label='Author' placeholder='Enter your name' 
                    onChange={(event) => { this.setState({author: event.target.value})}} />
                    <Form.TextArea label='post' placeholder='Start posting' 
                    onChange={(event) => {this.setState({body: event.target.value})}} />
                    <div className="category-control">
                       <Form.Field label='Select a category' control='select' 
                       onChange={(event) => { this.setState({category: event.target.value})}}>
                           <option value='react'>React</option>
                           <option value='redux'>Redux</option>
                           <option value='udacity'>Udacity</option>
                       </Form.Field>
                    </div>
                </Form.Group>
            </Form>
            <button onClick={this.onSubmit}>submit</button>  
        </div>
        )
    }
}
export default CreatePost;