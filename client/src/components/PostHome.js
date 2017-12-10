import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchingPost } from '../actions/index';

class PostHome extends Component {
    componentDidMount(props) {
        const { id } = this.props.match.params;
        console.log(id);
        this.props.fetchingPost(id);
    }
    render() {
        console.log(this.props);
        return (
            <div>
            {
                this.props.state.post ?
                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props.state.post.title}</Card.Header>
                            <Card.Meta>{this.props.state.post.author}</Card.Meta>
                            <Card.Description>{this.props.state.post.body}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            Score: {this.props.state.post.voteScore}
                        </Card.Content>
                    </Card>            
                : null
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
export default connect(mapStateToProps, {fetchingPost})(PostHome);