import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchingAPost} from "../actions/index";
import { Card } from 'semantic-ui-react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id);
        this.props.fetchingAPost(id);
    }

    upVote() {
        console.log('voting up')
    }

    downVote() {
        console.log('voting down');
    }

    render() {
        console.log(this.props.state.post);
        const { post } = this.props.state;
        console.log(post);
        return (
            <div>
                {
                    post ? <Card header={post.title} meta={post.author} description={post.body} />
                        : '...Loading'
                }

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
    return bindActionCreators({fetchingAPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);