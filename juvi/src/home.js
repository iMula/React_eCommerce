import React from 'react'
import hero from './images/hero-image.jpeg'

// import Slideshow from './components/slideShow'

const heroImage = {
    backgroundImage:`url(${hero})`
}

const slideImages = [
    "images/forest-green-hoodie.png",
    "images/juvi-whitetote.jpeg",
    "images/juvi-blk-tee.jpeg",
  ];

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
            <div easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </div>
           
        </>
    );
}

export default home