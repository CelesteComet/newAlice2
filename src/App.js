import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import HeaderContainer from './components/header-container';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

import { Provider } from 'react-redux';
import Store from './store/store';

class App extends Component {

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Provider store={ Store }>
        <BrowserRouter>
          <div>
            <HeaderContainer></HeaderContainer>
            <Route exact path='/' component={ Home }></Route>
            <Route exact path='/about' component={ About }></Route>
            <Route exact path='/contact' component={ Contact }></Route>
            <Footer></Footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
