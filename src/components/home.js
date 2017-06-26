import React, { Component } from 'react';
import Jumbotron from './jumbotron';

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Jumbotron />
    );
  }
}

export default Home;