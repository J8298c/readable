import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/index';
 class NavBar extends Component {
  state = {}

  componentDidMount(props) {
    //etch all categpories
    this.props.fetchCategories();
  }

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
        
          {
            this.props.categories ? 
              this.props.categories.categories.map(category => (
                <Menu.Item 
                name={category.name}
                active={activeItem === category.name}
                onClick={this.handleItemClick}
                link={true}
                as={Link}
                to={`/${category.name}/posts`}
                >
                  {category.name}
                </Menu.Item>
              ))
              : null
          }
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

function mapStateToProps(state) {
  const{categories} = state;
  return {
    categories
  }
}
export default connect(mapStateToProps, {fetchCategories})(NavBar);