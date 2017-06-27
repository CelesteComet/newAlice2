import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SliderNav from './slider-nav';
import HeaderLogo from '../assets/images/headerLogo.png';
import $ from 'jquery';

class Header extends Component {
  constructor() {
    super();
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {


    window.addEventListener('resize', this.props.setWindowSize);

    // menu event listener
    $('.collapse-button').on('click', function() {
      
      if( $('.slider').hasClass('closed') ) {

        $('nav').addClass('nav-enter-active');
        $('.desktop').addClass('turn-button');
        $('.slider').removeClass('closed');
        $('.slider').stop().animate({
          right: "0px"
        }, 1500, function() {
          $('.slider-img-container').animate({
            height: "81px"
          }, 1000)
        })
      } else {
        $('.desktop').removeClass('turn-button');
        $('nav').removeClass('nav-enter-active');
        $('.slider').addClass('closed');
        $('.slider-img-container').animate({
          height: "0px"
        }, 1000, function() {
          $('.slider').stop().animate({
            right: "3000px"
          }, 1500)
        })
      }

    })
  }

  componentDidUpdate() {
    if(this.props.state.menu.desktop) {
      $('nav').hide();
      $('.slider').show();
    } else {
      $('nav').show();
      $('.slider').hide();
    }
  }

  handleMenuClick() {
    this.props.toggleVisibility();
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
              <div className='collapse-button' onClick={this.handleMenuClick }>
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
            <div>
              <nav>
                <ul>
                  <li onClick={this.handleMenuClickReset}><a href='/'>Home</a></li>
                  <li onClick={this.handleMenuClickReset}><a href='/about'>About</a></li>
                  <li onClick={this.handleMenuClickReset}><a href='/contact'>Contact</a></li>
                </ul>
              </nav>
            </div>
              <SliderNav toggleMenu={this.handleMenuClickReset}/>
            </div>
      );
  }
}

export default Header;