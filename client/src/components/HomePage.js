import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import AppButton from './shared/AppButton';
import AppSelect from './shared/AppSelect';
import ShortPost from './shared/ShortPost';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchingCategories, fetchingAllPosts } from '../actions/index';
class HomePage extends Component {
    constructor(props){
        super(props);
        this.sortPost = this.sortPost.bind(this);
        this.convertDate = this.convertDate.bind(this);
    }
    componentDidMount() {
       this.props.fetchingAllPosts();
    }

    convertDate(date) {
        console.log(date, 'the date');
        const newDate = new Date(date * 1000);
        let month = newDate.getMonth();
        let day = newDate.getDay();
        let year = newDate.getFullYear();
        let formattedTime = month + '/' + day + '/' + year;
        console.log(formattedTime);
    }

    sortPost() {
        //sort all posts
    }


    render(){
        const options = [{vale: 'hello', key: 1}]
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <h1 className='app-title'>Readable overflow</h1>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <AppSelect options={options}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                       <Link to='/newpost'><AppButton color='blue' content='Create New Post'/></Link> 
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className='homepage-container'>
                    <Grid.Column width={16}>
                            {/* <AppSelect selectPlaceholder='filter posts' options={options}/> */}
                    </Grid.Column>
                            {
                                this.props.state ?
                                this.props.state.posts.map(post => (
                                    <Grid.Column width={16} key={post.id} className='post-container'>
                                    <Link to={`/posts/${post.id}`}>
                                        <ShortPost  postTitle={post.title} className='home-page-post'
                                        postAuthor={post.author} postVoteScore={post.voteScore} postTimeStamp={this.convertDate(post.timestamp)} id={post.id} />
                                     </Link>
                                    </Grid.Column>
                                )) : 'Fetching All Posts'
                            }
                </Grid.Row>
            </Grid>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategories, fetchingAllPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);