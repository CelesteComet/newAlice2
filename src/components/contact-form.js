import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      error: '',
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.name.length <= 0) {
      this.setState({
        error: "Name field must not be empty"
      })
    } else if (this.state.email.length <= 0) {
      this.setState({
        error: "Email field must not be empty"
      })
    } else if (this.state.message.length <= 0) {
      this.setState({
        error: "Message field must not be empty"
      })
    } else {
      this.setState({
        error: 'Thank you, we will reply you shortly'
      })
      setTimeout(() => {
        this.setState({
          error: "",
          name: "",
          email: "",
          message: ""
        })
      }, 2000)
    }
  }


  render() {
    if(this.state.error.length > 0) {
      var error = <div className="form-error"><p>{this.state.error}</p></div>
    }
    return (
      <form className="contact-form">
        <div className="form">
          {error}
          <input type="text" placeholder="Your Name" name='name' onChange={this.handleChange} value={this.state.name}/>
          <input type="text" placeholder="Valid Email ID" name='email' onChange={this.handleChange} value={this.state.email}/>
          <textarea placeholder="Your Message" cols='40' rows='8' name='message' onChange={this.handleChange} value={this.state.message}></textarea>
          <button onClick={this.handleSubmit}>Send Message</button>
        </div>
        <div className="address">
          <div className="innerAdd valign">
            <h1 className="email-heading"><span>corecul@gmail.com</span></h1>
            <h6>臺北市中正區杭州南路一段六巷六號三樓</h6>
            <h6>3rd Fl., No.6, Lane 6, Sec.1, Hangzhou South Road, Taipei, Taiwan (100)</h6>
            <h6>Tel:  +886 2 2391 9589</h6>
            <h6>Fax: +886 2 2391 6589</h6>
          </div>
        </div>
      </form>
    );
  }
}

function ContactForm() {


}

export default ContactForm;