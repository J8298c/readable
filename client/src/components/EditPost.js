import React, { Component } from 'react';
import Create from './shared/Create';
import { connect } from 'react-redux';
import { fetchingPost } from '../actions/index';
import AppButton from './shared/AppButton';

class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            body: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(props) {
        this.props.fetchingPost(this.props.match.params.id);
        
    }
    onSubmit(id) {
        console.log(id);
    }
    render(props) {
        
        return (
            <div>
               <Create />
               <AppButton content='Submit' />
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

export default connect(mapStateToProps, {fetchingPost})(EditPost);