import React, { Component } from 'react';
import Courses from './Courses';
import About from './About';

class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <main style={{width:"80%",margin: '0 auto'}}>
        <div className="d-flex flex-column">
          <img src="/images/walls/eliabe-costa-tzsUJD0TGkk-unsplash.jpg"  height="576px" alt=""/>
          <Courses courses={this.props.courses}/>
        </div>
        <About/>
      </main>
    );
  }
}

export default Main;