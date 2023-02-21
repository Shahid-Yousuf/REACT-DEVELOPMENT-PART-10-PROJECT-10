//import area


// class defintion area
import React, { Component } from 'react'

export default class Aside extends Component {
  render() {
    return (
      <div className='h-100 border border-warning '>
        <h5>{this.props.children}</h5>
      </div>
    )
  }
}




//export area
//3.1 default export
//3.2 named export