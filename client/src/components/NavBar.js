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
        return (
            <Menu>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                    link={true} content='home' to='/' as={Link}
                />
                {
                    categories !== null ? categories.map(category => (
                        <Menu.Item name={category.name} active={activeItem === category.name}
                            content={category.name} onClick={this.handleItemClick} link={true} key={category.name}
                            to={`/${category.name}`} as={Link}
                            />
                    )) : null
                }
            </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps, {fetchingCategories})(NavBar);