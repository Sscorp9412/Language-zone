import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends Component {
  state = {
    nav: [{
      value: 'home',
      href: '/',
      active: 'active'
    },{
      value: 'contact',
      href: '/',
      active: ''
    },{
      value: 'languages',
      href: '/',
      active: ''
    },{
      value: 'job opportunity',
      href: '/',
      active: ''
    },{
      value: 'blog',
      href: '/',
      active: ''
    }],
    courses: [
      {
        image: 'Germany',
        title: 'lorem ipsum',
        duration: '1-2',
      },
      {
        image: 'Japan',
        title: 'lorem ipsum',
        duration: '1-2',
      },
      {
        image: 'Spain',
        title: 'lorem ipsum',
        duration: '1-2',
      },
      {
        image: 'French',
        title: 'lorem ipsum',
        duration: '1-2',
      },
      {
        image: 'English',
        title: 'lorem ipsum',
        duration: '1-2',
      }
    ]
  }
  render() { 
    return ( 
      <div>
        <Header nav={this.state.nav}/>
        <Main courses={this.state.courses}/>
        <Footer courses={this.state.courses}/>
      </div>
    );
  }
}

export default App;