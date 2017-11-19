import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Grid} from 'semantic-ui-react';
import { fetchingAllPosts } from '../actions/index';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ShortPost from './shared/ShortPost';
import AppSelect from './shared/AppSelect';
import AppButton from './shared/AppButton';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this);
        this.convertDate = this.convertDate.bind(this);
    }
    componentDidMount() {
        //fetch all posts
        this.props.fetchingAllPosts();
    }
    sort(value) {
        //use lodash to sort through posts using ifstatement
    }
    convertDate(timestamp) {
        const formatted = new Date(timestamp).toDateString()
        console.log(formatted)
        return formatted;
    }
    render() {
        const options = [{key: 'score', value: 'score', text: 'Score'}, {key: 'date', value: 'date', text: 'Date'}];
        return (
            <div>
                <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                       <h5>App Title</h5> 
                    </Grid.Column>
                    <Grid.Column>
                            <AppSelect placeholder='Sort' options={options} />
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
                        <ShortPost postTitle={post.title} key={post.id} className='home-page-post'
                            postAuthor={post.author} postVoteScore={post.voteScore}
                            postCommentCount={post.commentCount} postTimeStamp={this.convertDate(post.timestamp)}
                        />
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
    return bindActionCreators({fetchingAllPosts}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);