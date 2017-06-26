import React, { Component } from 'react';
import ParallaxSection from './parallax';
import ContactForm from './contact-form';


class Contact extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="contact-container">
        <ParallaxSection backgroundImage="doors" centerText="CenterBoxText contact white" words="CONTACT"/>
        <ContactForm />
      </div>
    );
  }
}



export default Contact;