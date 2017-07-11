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
        <div className='slider closed'>
          <div className='slider-background'>
            <div className='slider-img-container'>
              <a href="/">
                <img src={headerLogo} alt="Core Cultural Management" />
              </a>
            </div>
          </div>
          <div className='slider-menu'>
            <div>
              <div>
                <ul>
                  <li><a href="/" onClick={this.props.toggleMenu}>HOME</a></li>
                  <li><a href="/about" onClick={this.props.toggleMenu}>ABOUT</a></li>
                  <li><a href="/contact" onClick={this.props.toggleMenu}>CONTACT</a></li>
                </ul>
              </div>
              <div className='copy-credits'>
                <a href="https://www.facebook.com/419535081556467">
                  <img className='footer-logo' src={fbLogo} alt='Facebook' />
                </a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default SliderNav;