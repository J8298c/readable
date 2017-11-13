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
                    active={activeItem === 'Home'}
                    onClick={this.handleItemClick}
                    link={true}
                ><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item
                    name='React'
                    active={activeItem === 'React'}
                    content='React'
                    onClick={this.handleItemClick}
                    link={true}
                />
                <Menu.Item
                    name='Udacity'
                    content='Udacity'
                    active={activeItem === 'Udacity'}
                    onClick={this.handleItemClick}
                    link='/udacity'
                />
                <Menu.Item
                    name='Redux'
                    content='Redux'
                    active={activeItem === 'Redux'}
                    onClick={this.handleItemClick}
                    link={true}
                />
            </Menu>
        )
    }
}
export default NavBar;