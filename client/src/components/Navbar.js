import React,  { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const { activeItem } = this.state;

    return (
      <div className='menu-wrapper'>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'}
            onClick={this.handleItemClick} as={Link} to='/'
           />
          <Menu.Item
            name='react' active={activeItem === 'react'}
            onClick={this.handleItemClick} to='/react' as={Link}
            //need to render as={Link} to={'whatever page'}
          />
         <Menu.Item name='redux' active={activeItem === 'redux'}
           onClick={this.handleItemClick} to='/redux' as={Link}
         />
         <Menu.Item name='udacity' active={activeItem === 'udacity'}
           onClick={this.handleItemClick} to='/udacity' as={Link}
         />
         <Menu.Menu position='right'>
           <Menu.Item as={Link}
             to='/posts/createpost' name='new post'
             active={activeItem === 'new post'} onClick={this.handleItemClick}/>
         </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Navbar;
