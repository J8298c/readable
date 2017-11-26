import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { likingPost } from '../../actions/index';
import AppButton from './AppButton';

class Scoring extends Component {
    onVote(id, option){
        console.log(id)
        console.log(option)
        this.props.likingPost(id, option);
    }
    render(props) {
        const { id } = this.props.post;
        return (
            <Button.Group fluid>
                <AppButton content='Like' size='mini'color='green' onButtonClick={() => { this.onVote(id, 'upVote')}} />
                <Button.Or /> 
                <AppButton content='Unlike' size='mini' color='red' onButtonClick={() => { this.onVote(id, 'downVote')}}/>
            </Button.Group>
        )
    }
}

export default connect(null, {likingPost})(Scoring)