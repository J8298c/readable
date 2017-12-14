import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchAComment } from '../actions/index';

const buttonStyle ={
    margin: '24px auto',
    display: 'block',
    backgroundColor: '#85f589',
    color: '#ee82c3'
}

class EditComment extends Component {
    state = {
        title: '',
        body: '',
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchAComment(id);
    }

    onSubmit = (id) => {
        const data = {title: this.state.title, body: this.state.body};

    }
    render(props) {
        return (
            <div>
                {
                    this.props.state.comment ?
                    <Form>
                    <Form.TextArea placeholder={this.props.state.comment.body} label='Post'
                        onChange={(event) => { this.setState({body: event.target.value})}}
                        />
                        <Form.Field onClick={ this.onSubmit(this.props.state.comment.id)} control={Button} style={buttonStyle}>Submit</Form.Field>
                    </Form>
                    :null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    state
  }
}
export default connect(mapStateToProps, { fetchAComment})(EditComment);
