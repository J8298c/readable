import React, { Component } from 'react';
import AppSelect from './shared/Select';
import { Grid } from 'semantic-ui-react';
import AppButton from './shared/AppButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories, fetchingAllPosts } from '../actions/index';
class HomePage extends Component {
    constructor(props){
        super(props);
        this.sortPost = this.sortPost.bind(this);
    }
    componentDidMount() {
       this.props.fetchingAllPosts();
    }

    sortPost() {
        //sort all posts
    }
    render(){
        console.log(this.props.state, 'current app state');
        return (
            <Grid celled>
                <Grid.Row>
                    <Grid.Column width={13}>
                        <h1>Title of the App</h1>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <AppButton color='blue' content='Create New Post'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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
    return bindActionCreators({fetchingCategories, fetchingAllPosts}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);