import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import AppSelect from './shared/Select';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories } from '../actions/index';
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

    onSubmit() {
        //do somehting with a post request here
        //then push user backl to home page
    }
    render() {
        const options = [{text: 'react', value: 'react'}, {text: 'redux', value: 'redux'}, {text: 'udacity', value: 'udacity'}]
        return (
            <Form>
                <Form.Group width='equals'>
                    <Form.Input 
                        label='Post Title' placeholder='enter post title' 
                        onChange={(event) => { this.setState({title: event.target.value})}} />
                        <AppSelect selectPlaceholder='Pick a category' options={options}
                        onOptionSelect={(event) => {this.setState({category: event.target.value})}} className='create-post-select'/>
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
    return bindActionCreators({fetchingCategories}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);