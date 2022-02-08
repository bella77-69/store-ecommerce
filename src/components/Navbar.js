import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../Styles/scss/_images.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          {" "}
          <img src={logo} alt="app-logo" className="navbar-brand navbar-logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus">my cart</i>
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
