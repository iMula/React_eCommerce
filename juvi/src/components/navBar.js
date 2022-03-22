import React from 'react'
import '../App.css'

export const navBar = () => {
  return (
    <>
    <nav>
            <ul>
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="Shop.html">Shop</a></li>
                <li><a href="contacts.html">Contacts</a></li>
            </ul>
    </nav>
    </>
  )
}




import React from "react";

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
                   <li><a href="">About</a></li>
                   <li><a href="">Contact</a></li>
                   <li><a href="account.html">Account</a></li>
               </ul>
              </nav>
             <Outlet></Outlet>
          </div>
          
       </div>

    )
    
    }
}
