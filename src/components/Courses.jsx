import React, { Component } from 'react';
import Course from './Course';

class Courses extends Component {
  state = {
  }

  styles={
    background: 'url("/images/walls/siora-photography-hgFY1mZY-Y0-unsplash.jpg")', 
    height:'576px'
  }
  render() { 
    return ( 
      <div style={this.styles}>
        <div className="d-flex justify-content-center m-4">
        <p className="text-light" style={{margin: '0 auto',background: '#689c34', padding: '0.5em 1em', fontSize: '2em', fontWeight: '500', borderRadius: '40px',zIndex: '1'}}>Our Newly Introduced Courses</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          {this.props.courses.map(course=><Course course={course}/>)}
        </div>
      </div>
    );
  }
}
export default Courses;