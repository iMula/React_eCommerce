import React from "react";
// import "../App.css";

import {
  Link,
} from "react-router-dom";


 class Nav extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="navbar">
          <div class="logo"></div>
          <nav>
            <ul id="MenuItems">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav
