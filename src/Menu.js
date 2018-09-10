import React, { Component } from 'react';
import {Category} from './assets/styles/GlobalStyles'
import {MenuContainer} from './assets/styles/MenuStyles'

export default class Menu extends Component {
  toggle = () => {
    this.props.toggleMenu()
  }

  render() {
    return (
      <MenuContainer>
        <Category onClick={this.toggle}>MENU</Category>
        {this.props.open && this.props.children}
      </MenuContainer>
    )
  }
}
