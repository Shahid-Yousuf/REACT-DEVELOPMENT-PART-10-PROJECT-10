//import area
import Aside from './Aside';
import Main from './Main';
import { Footer } from './Footer';
//class definition area

import React, { Component } from 'react'

export default class Section extends Component {
  render() {
    return (
        <div className='container h-100 border border-danger section'>
            <div className='row h-100'>
                <div className='col-2 h-100'>
                    <Aside>left aside</Aside>
                </div>
                <div className='col-8 border border-danger'>
                    <Main />
                </div>
                <div className='col-2'>
                    <Aside>right aside</Aside>
                </div>
            </div>
        </div>
    )
  }
}




//export area
//3.1 default export
//3.2 named export