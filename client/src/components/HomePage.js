import React, { Component } from 'react';
import AppSelect from './shared/Select';
import { Grid } from 'semantic-ui-react';
import AppButton from './shared/AppButton';

class HomePage extends Component {
    constructor(props){
        super(props);
        this.sortPost = this.sortPost.bind(this);
    }
    sortPost() {
        //sort all posts
    }
    render(){
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
export default HomePage;