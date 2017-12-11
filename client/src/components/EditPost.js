import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingPost} from '../actions/index';

class EditPost extends Component {
    state = {
        title: '',
        body: '',
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchingPost(id);
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
                            />

                    <Form.TextArea placeholder={this.props.state.post.body} label='Post' 
                        onChange={(event) => { this.setState({body: event.target.value})}}
                        />
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
export default connect(mapStateToProps, {fetchingPost})(EditPost);

