import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing>
          <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/'
        >
          Readable Overflow
        </Menu.Item>
        <Menu.Item
          name='react'
          active={activeItem === 'react'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/category/react'
        >
          React
        </Menu.Item>

        <Menu.Item
          name='redux'
          active={activeItem === 'redux'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/category/redux'
        >
          Redux
        </Menu.Item>

        <Menu.Item
          name='udacity'
          active={activeItem === 'udacity'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/category/udacity'
        >
          Upcoming Events
        </Menu.Item>
        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/posts/new'
          position='right'
        >
          Create Post
        </Menu.Item>
      </Menu>
    )
  }
}
