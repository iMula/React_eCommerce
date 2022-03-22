import React from 'react'
import '../partials/contact.scss'

export const contact = () => {
    return (
        <>
         <header>
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <img src="juvi-logo.png" alt="logo" width="125px"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Shop.html">Shop</a></li>
                        <li className="active"><a href="contacts.html">Contacts</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>

        <div className="container">  
            <form id="contact" method="post">
              <h3>Quick Contact</h3>
              <h4>Contact us today, and get reply with in 24 hours!</h4>
              <fieldset>
                <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabindex="2" required/>
              </fieldset>
              <fieldset>
                <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
              </fieldset>
              <fieldset>
                <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
            </form>
           
            
          </div>



{/* <!-- Start Footer bottom Area --> */}
<footer>
    <div className="footer-area-bottom">
      <div className="container">
        <div className="row-footer">
          <div className="col-md-12">
            <div className="footer-icons">
              <ul>
                <li>
                  <a href="#">
                    <span className="ti-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ti-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ti-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="ti-youtube"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="credits">
              <a href="#">Privacy Policy</a> | <a href="#">Terms & Condition</a>
            </div>
            <div className="copyright text-center">
              <p>
                &copy; Copyright 2021. | <strong><a href="#"> Juvi </a></strong> | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
    )
};