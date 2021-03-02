import React, { Component } from 'react'; 

class Footer extends Component {
  render() { 
    return ( 
      <div style={{maxWidth: '80%', margin: '0 auto'}}>
        <img src="/images/Ui/footer.png" alt="" width="100%"/>
        <div className="d-flex p-2" style={{background: '#242424'}}>
          <div className="d-flex p-2">
            <div className="d-flex flex-column p-2" style={{marginTop: '2rem'}}>
              <h1 className="text-light">Lorem ipsum dolor sit amet.</h1>
              <div className="d-flex">
                <div className="d-flex flex-column m-4" style={{minWidth: '200px'}}>
                  <input type="text" className="form-control m-1" placeholder="Name"/>
                  <input type="text" className="form-control m-1" placeholder="Email"/>
                  <input type="text" className="form-control m-1" placeholder="Mobile No."/>
                  <select className="form-control m-1">
                    <option value="Choose...">Choose...</option>
                    {this.props.courses.map(course=><option value={course.title}>{course.title}</option>)}
                  </select>
                  <button className="btn btn-success m-1">Send</button>
                </div>
                <p className="text-light" style={{fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore vitae aperiam provident iure magnam illum, nihil consequuntur minus sequi unde id animi expedita! Itaque.</p>
              </div>
            </div>
            <img src="/images/Ui/logo2.png" width="50%" alt="empty"/>
          </div>
          <div>
          </div>
        </div>
        <img src="/images/Ui/last.png" width="100.1%" alt="empty"/>
      </div>
    );
  }
}
export default Footer;