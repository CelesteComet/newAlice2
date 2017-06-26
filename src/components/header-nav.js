import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNav extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <ul >
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
    );
  }
}

export default HeaderNav;