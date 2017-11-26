import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'


class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu>
        <Menu.Item header>Readable</Menu.Item>
        <Menu.Item name='React' active={activeItem === 'React'} onClick={this.handleItemClick} />
        <Menu.Item name='Redux' active={activeItem === 'Redux'} onClick={this.handleItemClick} />
        <Menu.Item name='Udacity' active={activeItem === 'Udacity'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default NavBar;