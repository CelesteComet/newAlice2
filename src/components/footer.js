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
          <img className='footer-logo' src={fbLogo} alt='Facebook' />
          <div className='footer-set'>
            <p>
              大果文化顧問
              <br />
              Core Cultural Management
            </p>
            <img className='footer-logo' src={ccLogo} alt='Core Cultural' />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;