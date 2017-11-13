import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import AppSelect from './shared/Select';
import AppButton from './shared/AppButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories, addAPost } from '../actions/index';
import uuid from 'uuid';
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
    componentDidMount() {
        this.props.fetchingCategories();
    }

    onSubmit(event) {
        //do somehting with a post request here
        //then push user backl to home page
        console.log(this.state)
        const newPost = Object.assign({}, this.state, {
            timeStamp: Date.now(),
            voteScore: 0,
            id: uuid()
        });
        console.log(newPost);
        this.props.addAPost(newPost);   
    }
    render() {
        const options = [{text: 'react', value: 'react'}, {text: 'redux', value: 'redux'}, {text: 'udacity', value: 'udacity'}]
        return (
            <Form>
                <Form.Group width='equals'>
                    <Form.Input 
                        label='Post Title' placeholder='enter post title' 
                        onChange={(event) => { this.setState({title: event.target.value})}} />
                        <Form.Field label='Select a category' control='select' 
                            onChange={(event) => { this.setState({category: event.target.value})}}>
                           <option value='react'>React</option>
                           <option value='redux'>Redux</option>
                            <option value='udacity'>Udacity</option>
                        </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Input 
                        label='Post Author' placeholder='enter the post author' 
                        onChange={(event) => { this.setState({author: event.target.value})}} />
                </Form.Group>
                <Form.Group>
                    <Form.TextArea label='About' placeholder='Blog it baby......' 
                        onChange={(event)=> { this.setState({body: event.target.value})}} />
                </Form.Group>
                <AppButton buttonOnClick={this.onSubmit} color='blue' content='Submit' />
            </Form>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategories, addAPost}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);