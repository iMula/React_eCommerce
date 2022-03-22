import React from "react";
import '../App.css'

import {
    BrowserRouter as Router,
    Outlet,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";



export default class Nav extends React.Component{
    render(){

    return(

    <div class="container">
          <div class="navbar">
              <div class="logo">
                 
              </div>
              <nav>
               <ul id="MenuItems">
               <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">About</Link>
          </li>
                   <li><a href="">Home</a></li>
                   <li><a href="">Products</a></li>
                   <li><a href="contact.html">Contact</a></li>
               </ul>
              </nav>
             <Outlet></Outlet>
          </div>
          
       </div>

    )
    
    }
}
