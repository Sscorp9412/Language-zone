import React, { Component } from 'react';

class Course extends Component {
  render() { 
    console.log(this.props);
    return ( 
      <div className="card m-2" style={{maxWidth: '13rem', maxHeight: '25rem'}}>
          <img className="card-img-top" src={this.getFormatedImage(this.props.course.image)} alt=""/>
          <h5 className="card-title" style={{fontWeight: '900', margin: '0.8em auto'}}>{this.props.course.title}</h5>
          <div className="card-body d-flex flex-column align-items-center">
            <p className="text-danger">Duration- 1-2 Months</p>
            <button className="btn btn-dark">View More</button>
          </div>
      </div>
    );
  }

  getFormatedImage=(image)=>{
    return '/images/flags/'+image+'.jpg';
  }
}

export default Course;