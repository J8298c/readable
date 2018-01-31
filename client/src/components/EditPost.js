import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingPost, editPost } from '../actions/index';

const buttonStyle ={
    margin: '24px auto',
    display: 'block',
    backgroundColor: '#85f589',
    color: '#ee82c3'
}

class EditPost extends Component {
    state = {
        title: '',
        body: '',
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchingPost(id);
        if(this.props.state.post) {
            this.setState({
                title: this.props.state.post.title,
                body: this.props.state.post.body
            })
        }
    }

    onSubmit = (id) => {
        const data = {title: this.state.title, body: this.state.body};
        this.props.editPost(id, data)
    }
    render(props) {
        
        return (
            <div>
                {
                    this.props.state.post ? 
                    <Form>
                        <Form.Input 
                        placeholder={this.props.state.post.title} label='Post Title' 
                            onChange={(event) => { this.setState({ title: event.target.value})}}
                            value={this.state.title}
                            />

                    <Form.TextArea placeholder={this.props.state.post.body} label='Post' 
                        onChange={(event) => { this.setState({body: event.target.value})}}
                        value={this.state.body}
                        />
                        <Form.Field onClick={ this.onSubmit(this.props.state.post.id)} control={Button} style={buttonStyle}>Submit</Form.Field>
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
export default connect(mapStateToProps, {fetchingPost, editPost})(EditPost);

