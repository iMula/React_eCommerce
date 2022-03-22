import React from 'react'


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

  </>
    )
}

export default contact