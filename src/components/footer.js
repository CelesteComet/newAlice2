import React, { Component } from 'react';
import fbLogo from '../assets/images/fbLogo.svg';
import ccLogo from '../assets/images/ccLogo.png';

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer>
        <div>
          <a href="https://www.facebook.com/419535081556467">
            <img className='footer-logo' src={fbLogo} alt='Facebook' />
          </a>
          <div className='footer-set'>
            <p>
              大果文化顧問
              <br />
              Core Cultural Management
            </p>
            <a href="https://www.facebook.com/419535081556467">
              <img className='footer-logo' src={ccLogo} alt='Core Cultural' />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;