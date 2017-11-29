import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid} from 'semantic-ui-react';
import { fetchingAllPosts, likingPost } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import Posts from './shared/Posts';
import AppSelect from './shared/AppSelect';
import AppButton from './shared/AppButton';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.convertDate = this.convertDate.bind(this);
    }
    componentDidMount() {
        //fetch all posts
        this.props.fetchingAllPosts();
    }
    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        return formatted;
    }
    render() {
        console.log(this.props)
        console.log('mounting')
        const options = [{key: 'score', value: 'score', text: 'Score'}, {key: 'date', value: 'date', text: 'Date'}];
        return (
            <div>
                <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                            <AppSelect placeholder='Sort' options={options} onSelect={(event) => {this.sort(event.target.innerText)}}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Link to='/create'>
                            <AppButton color='pink' content='Create Post' />
                        </Link>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                    {
                        this.props.posts.map(post => (
                            <Posts posttitle={post.title} postid={post.id} postauthor={post.author} posttimestamp={this.convertDate(post.timestamp)}
                            postbody={post.body} postvoteScore={post.voteScore} postcommentCount={post.commentCount} post={post}/>
                        ))
                    }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return (
        state
    )
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingAllPosts, likingPost}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);