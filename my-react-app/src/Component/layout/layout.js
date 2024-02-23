import React, { Component } from 'react';
import Slider from '../slider/slider';
import Home from '../home/home';
import Footer from '../footer/footer';
import Header from '../header/header';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <Home></Home>
                <Footer></Footer>

            </div>
        );
    }
}
