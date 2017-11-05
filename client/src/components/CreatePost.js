import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import Input from './shared/input';
import Button from './shared/button';
import Select from './shared/select';
import TextArea from './shared/textarea';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCatTitles } from '../actions/index';

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
        const { categories } = this.props.state.categories;
        return (
            <div>
              <Form className='new-post'>
                <Form.Group widths="equal">
                    <Input 
                    placeholder='Enter a Title' onChange={(event) => {this.setState({title: event.target.value})}}
                    label='Post Title' />
                    <Input 
                    placeholder='Authors Name' onChange={(event) => {this.setState({author: event.target.value})}}
                    label='Post Author' />
                    <TextArea placeholder='Start Posting' label='Enter Post' 
                    onChange={(event) => {this.setState({body: event.target.value})}}
                    />
                    <Select label='Select a category' options={categories}
                    onChange={(event) => {this.setState({category: event.target.value})}} />
                </Form.Group>
            </Form>
            <Button onClick={this.onSubmit} innerText='submit'/>
        </div>
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
    return bindActionCreators({fetchingCatTitles}, dispatch)
}
export default connect (mapStateToProps, mapDispatchToProps)(CreatePost);

