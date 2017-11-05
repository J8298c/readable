import React, {Component} from 'react';
import { Heading } from './shared/header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchingCategoryTitles } from '../actions/index';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchingCategoryTitles();
    }
    render() {
        return (
            <div>
                {
                    this.props.categories ? 
                    this.props.categories.map(category => (
                        <Link to={`/posts/${category.name}`} key={category.name}>
                            <Heading as='h1' size='large' headerContent={category.name}
                            className='category-title' />
                        </Link> 
                    )) :
                    '...Loading'
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state, 'the state');
    const { categories } = state;
    return {
        categories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchingCategoryTitles}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);