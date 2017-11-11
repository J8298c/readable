import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    state = {}
    handleItemClick = (e, { name }) => this.setState({activeItem: name})

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item
                    name='Home'
                    content='Home'
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='React'
                    active={activeItem === 'React'}
                    content='React'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Udacity'
                    content='Udacity'
                    active={activeItem === 'Udacity'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Redux'
                    content='Redux'
                    active={activeItem === 'Redux'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}
export default NavBar;