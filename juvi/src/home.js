import React from 'react'
import hero from './images/hero-image.jpeg'

// import Slideshow from './components/slideShow'

const heroImage = {
    backgroundImage:`url(${hero})`
}


export const home = () => {
    return (
        <>
            <header style={heroImage}>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src="./images/juvi-logo.png" alt="logo" width="125px"/>
                        </div>
                    </div>
                </div>
            </header>
            <br />
            <div className="row">
                <div className="col-2">
                    <h1>Welcome To The Journey!</h1>
                    <p>Shop The Hottest Clothes Out Right Now</p>

                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-2">

                </div>
            </div>

            {/* <!-- featured products slideshow --> */}
            <div className="slideshow-container">
      <div className="slideshow">
        <img src="./images/forest-green-hoodie.png" alt="Slide 1" />
        <img src="./images/juvi-whitetote.jpeg" alt="Slide 4"/>
        <img src="./images/juvi-blk-tee.jpeg" alt="Slide 3"/>
      </div>
    </div>
           
        </>
    )
}

export default home