import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    AddCart = () => {
        alert("add thành công ")
    }
    Login = (x) => {
        this.setState({ login: true })
    }
    logout = () => {
        this.setState({ login: false })
    }
    _RenderLogin = () => {
        return (
            // <button style={{ marginLeft: "10px" }}
            //     onClick={() => this.Login("thân anh tuấn")}
            //     className="btn btn-outline-dark"
            //     type="submit"
            // >
            //     Đăng nhập

            // </button>
            <Link to="/login">
                <button style={{ marginLeft: "10px" }}
                    className="btn btn-outline-dark"
                    type="submit"
                >
                    Đăng nhập

                </button>
            </Link>

        )
    }
    _RenderInforUser = () => {
        return (
            <div>
                Thân anh tuấn
                <button className="btn btn-outline-dark"
                    type="submit" onClick={() => this.logout()}>
                    Logout
                </button>
            </div>
        )
    }
    Checklogin = () => {

        if (this.state.login == false) {
            return this._RenderLogin()
        }
        else {
            return this._RenderInforUser()
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <a style={{ color: "red" }}
                            className="navbar-brand"
                            href="#!"
                        >
                            TAT Shop
                        </a>
                        <button
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            className="navbar-toggler"
                            data-bs-target="#navbarSupportedContent"
                            data-bs-toggle="collapse"
                            type="button"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item">
                                    <a
                                        aria-current="page"
                                        className="nav-link active"
                                        href="#!"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#!"
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        aria-expanded="false"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                    >
                                        Shop
                                    </a>
                                    <ul
                                        aria-labelledby="navbarDropdown"
                                        className="dropdown-menu"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#!"
                                            >
                                                All Products
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#!"
                                            >
                                                Popular Items
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#!"
                                            >
                                                New Arrivals
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button
                                    onClick={() => this.AddCart()}
                                    className="btn btn-outline-dark"
                                    type="submit"
                                >
                                    <i className="bi-cart-fill me-1" />
                                    Cart
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">
                                        0
                                    </span>
                                </button>
                                {this.Checklogin()}

                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
