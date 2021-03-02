import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  state = { 
    contactNo1: '+91 88821- 40688',
    contactNo2: '+91 88821- 40688',
    socialIcons:['facebook', 'linkedin', 'twitter'],
    title: 'Language',
    subTitle: 'zone',
    tagline: 'Bringing Excellence in Language',
    subtagline: 'language zone a unit of brillica services pvt.ltd.',
    logo: ''
  }
  render() { 
    return ( 
      <div className="header d-flex flex-column" style={{maxWidth: '80%', margin: '0 auto', background: '#fff', paddingTop: '6px'}}>
        <div className="d-flex" style={{maxWidth: '88%'}}>
          <div className="phone d-flex align-items-start" style={{marginTop: '5px',marginLeft: 'auto'}}>
          <div className="bg-dark rounded-circle" style={{padding: '3px 7px'}}>
          <i className="fa fa-phone text-light" aria-hidden="true"></i>
          </div>
          <p className="m-1" style={{fontWeight: '900', fontFamily: 'sans-serif'}}>{this.state.contactNo1} | {this.state.contactNo2}</p>
          </div>
          <ul className="social bg-dark d-flex" style={{listStyle: 'none', padding: '0 14px'}}>
            {this.state.socialIcons.map(icon=><li key={icon}>
              <i className={this.getSocialIcon(icon)} aria-hidden="true" style={this.getIconStyle(icon)}></i>
            </li>)}
          </ul>
          <p className="btn btn-success" style={{borderRadius: 0}}>PAY ONLINE</p>
        </div>
        <div className="" style={{width: '80%', margin: '0 auto'}}>
          <div className="d-flex" style={{justifyContent: 'space-between'}}>
          <img src="/images/Ui/logo.png" alt="empty" width="360px"/>
          <img src="/images/Ui/Brand-img.png" alt="empty" width="360px"/>
          </div>
        </div>
        <Nav nav={this.props.nav}/>
      </div>
    );
  }

  getSocialIcon=(icon)=>{
    console.log(icon);
    let temp='bg-light m-1 fa fa-';
    return temp+icon;
  }

  getIconStyle=(icon)=>{
    let temp={borderRadius: '50%', padding: '6px 6px', cursor: 'pointer'};
    let temp2={borderRadius: '50%', padding: '6px 9px', cursor: 'pointer'}
    return icon==='facebook'? temp2:temp;
  }
}

export default Header;