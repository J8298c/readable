import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingPost } from '../actions/index';
import AppButton from './shared/AppButton';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            author: null,
            body: null
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.checkState = this.checkState.bind(this);
    }
    componentDidMount(props) {
        this.props.fetchingPost(this.props.match.params.id);

    }
    checkState(field) {
        if(field === '') {
            return this.props.post.key;
        }
        else {
            console.log(this.state.field)
            console.log(field);
            return field
        }
    }
    onSubmit(id) {
        const { author, body, title } = this.state;
        console.log(id);
        console.log(this.state)
        let post = {
            author: this.state.author ? this.state.author : this.props.post.author,
            title:  this.state.title ? this.state.title : this.props.post.title,
            body: this.state.body ? this.state.body : this.props.post.body
        }
        console.log(post)
    }
    render(props) {

        return (
            <div>
                {
                    this.props.post ?
                    <div>
                    <Form>
                        <Form.Field>
                        <Form.Input label='Title' placeholder={this.props.post.title} onChange={(event) => {this.setState({title: event.target.value})}} />
                        <Form.Input label='Author' placeholder={this.props.post.author} onChange={(event) => {this.setState({author: event.target.value})}}   />
                        <Form.TextArea label='Post/Comment' placeholder={this.props.post.body}
                            onChange={(event) => {this.setState({body: event.target.value})}}
                        />
                        </Form.Field>
                    </Form>
                    <AppButton content='Submit' onClick={() => {this.onSubmit(this.props.post.id)}} />
                    </div>
                    : null
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
   const { post } = state;
   console.log(post)
   return {
       post
   }
}

export default connect(mapStateToProps, {fetchingPost})(EditPost);
