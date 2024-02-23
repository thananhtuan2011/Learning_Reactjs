import logo from './logo.svg';
import './App.css';
import Header from "./Component/header/header"
import Slider from "./Component/slider/slider"

import React, { Component } from 'react';
import Home from './Component/home/home';
import Footer from './Component/footer/footer';
import RouterURL from './Component/router/router';
function __hellowrod(props) {
    console.log("ffff", props.text)
    return (
        <span>
            {props.text}
        </span>

    )

}




class Number2 extends Component {
    render() {
        return (
            <div>
                test
            </div>
        );
    }
}






function App() {
    return (
        <div className="App">
            {/* <Header></Header>
            <Slider></Slider>
            <Home></Home>
            <Footer></Footer> */}

            <RouterURL></RouterURL>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <Number2></Number2>
                    Test
                    <__hellowrod text="Tôi là tuấn đây"></__hellowrod>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;