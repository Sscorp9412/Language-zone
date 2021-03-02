import React, { Component } from 'react';

class Item extends Component {

  render() { 
    return ( 
        <a className={this.props.item.active} href={this.props.item.href} style={{textDecoration: 'none', width:this.props.handleLength+'%' }}>{this.props.item.value.toUpperCase()}</a>
    );
  }
}

export default Item;