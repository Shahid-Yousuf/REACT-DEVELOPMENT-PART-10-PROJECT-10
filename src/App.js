// import area
import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { Footer } from "./components/Footer"

//class definition area
export default class App extends React.Component {
    // 1. properties
    // 2.constructor
    // method
    //every class have render method 
    //render method return jsx
    render(){
        return <>
                    <Header />
                    <Section />
                    <Footer />
        
               </>
    }

}


//export area
//3.1 export default
//3.2 named export