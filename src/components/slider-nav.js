import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../assets/images/headerLogo.png';
import fbLogo from '../assets/images/fbLogo.svg';
import $ from 'jquery';

class SliderNav extends Component {
  constructor() {
    super();
  }




  render() {
    return (
        <div className='slider'>
          <div className='slider-background'>
            <div className='slider-img-container'>
              <img src={headerLogo} alt="Core Cultural Management" />
            </div>
          </div>
          <div className='slider-menu'>
            <div>
              <div>
                <ul>
                  <li><Link to="/" onClick={this.props.toggleMenu}>HOME</Link></li>
                  <li><Link to="/about" onClick={this.props.toggleMenu}>ABOUT</Link></li>
                  <li><Link to="/contact" onClick={this.props.toggleMenu}>CONTACT</Link></li>
                </ul>
              </div>
              <div className='copy-credits'>
                <img className='footer-logo' src={fbLogo} alt='Facebook' />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SliderNav;