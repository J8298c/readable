import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingCategories } from '../actions/index';

class NavBar extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({activeItem: name})
    componentDidMount() {
        this.props.fetchingCategories();
    }
    render() {
        const { activeItem } = this.state;
        let categories;
        this.props.state.categories ? categories = this.props.state.categories : null
        console.log(categories, 'the categories');
        return (
            <Menu>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                    link={true} content='home' to={'/'}
                />
                {
                    categories !== null ? categories.map(category => (
                        <Menu.Item name={category.name} active={activeItem === category.name}
                            content={category.name} onClick={this.handleItemClick} link={true} key={category.name}
                            to={`/${category.name}/posts`}
                            />
                    )) : null
                }
                {/* <Menu.Item
                    name='React'
                    active={activeItem === 'React'}
                    content='React'
                    onClick={this.handleItemClick}
                    link={true}
                ><Link to='/react/posts'>React</Link></Menu.Item>
                <Menu.Item
                    name='Udacity'
                    content='Udacity'
                    active={activeItem === 'Udacity'}
                    onClick={this.handleItemClick}
                    link='/udacity'
                    ><Link to='/udacity/posts'>Udacity</Link></Menu.Item>
                <Menu.Item
                    name='Redux'
                    content='Redux'
                    active={activeItem === 'Redux'}
                    onClick={this.handleItemClick}
                    link={true}
                    ><Link to='/redux/posts'>Redux</Link></Menu.Item> */}
            </Menu>
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
    return bindActionCreators({fetchingCategories}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);