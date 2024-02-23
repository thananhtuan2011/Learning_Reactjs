import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/layout';
import Login from '../login/login';

export default class RouterURL extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>

                    <Route path="/" exact element={<Layout></Layout>} />
                    <Route path="/login" element={<Login></Login>} />
                    {/* <Route path="/contact" component={Contact} /> */}
                    {/* <Route component={NotFound} 
                    
                    /> */}
                </Routes>
            </BrowserRouter>
        );
    }
}
