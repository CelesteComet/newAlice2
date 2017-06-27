import React, { Component } from 'react';
import $ from 'jquery';
import loader from '../assets/images/loader.gif';

class Pace extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className='pace pace-progress'></div>
        <div className='cover'>
          <img className='loader' src={loader} />
        </div>
      </div>
    );
  }
}

export default Pace;