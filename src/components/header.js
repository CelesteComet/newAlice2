import React, { Component } from 'react';
import TransitionGroup from 'react-addons-transition-group';
import SliderNav from './slider-nav';
import HeaderLogo from '../assets/images/headerLogo.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Header extends Component {
  constructor() {
    super();
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.setWindowSize);
  }

  handleMenuClick() {
    this.props.toggleVisibility();
  }

  componentDidUpdate() {
    if(this.props.state.menu.isVisible) {
      $('.desktop').addClass('turn-button');
      $('.slider').addClass('slider-in');
      $('.slider-img-container').addClass('show-slider-img');
    } else {
      $('.desktop').removeClass('turn-button');
      $('.slider').removeClass('slider-in');
      $('.slider-img-container').removeClass('show-slider-img');
    }

  }



  render() {
      
      var menuState = this.props.state.menu;
      console.log(menuState);

      return (
        <div>
          <header>
            <div>
              <div className='header-text'>MENU</div>
              <div className='header-logo'><img src={HeaderLogo} /></div>
              <div className='collapse-button' onClick={this.props.toggleVisibility}>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span> 
                <span className='icon-bar'></span>                   
              </div>
              <div className='collapse-button desktop' onClick={ this.handleMenuClick }>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span> 
                <span className='icon-bar'></span>                   
              </div>
            </div>
          </header>
          {menuState.isVisible && !menuState.desktop && 
            <div>
              <nav>
                <ul>
                  <li onClick={this.handleMenuClick}><Link to='/'>Home</Link></li>
                  <li onClick={this.handleMenuClick}><Link to='/about'>About</Link></li>
                  <li onClick={this.handleMenuClick}><Link to='/contact'>Contact</Link></li>
                </ul>
              </nav>
            </div>
          }
          {menuState.isVisible && menuState.desktop &&
            <SliderNav toggleMenu={this.handleMenuClick}/>
          }
        </div>
      );
  }
}

export default Header;