import React, { Component } from 'react';
import Item from './NavItem';

class Nav extends Component {
  render() { 
    return ( 
      <div style={{background: '#689c34' }}>
        <nav className="mynavbar" style={{margin: '0 auto'}}>
          { this.props.nav.map(item => <Item key={item.value} item={item} handleLength={parseInt(100/this.props.nav.length)}/> ) }
        </nav>
      </div>
    );
  }
}

export default Nav;