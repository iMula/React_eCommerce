import React from 'react'
import hero from './images/hero-image.jpeg'

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
                            <img src="juvi-logo.png" alt="logo" width="125px" />
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

            {/* <!-- featured products --> */}
            <section className="categories">
                <div className="row">
                    <div className="col-3">
                        <img src="images/forest-green-hoodie.png" />
                    </div>
                    <div className="col-3">
                        <img src="images/juvi-blk-tee.jpeg" />
                    </div>
                    <div className="col-3">
                        <img src="images/juvi-whitetote.jpeg" />
                    </div>
                </div>
            </section>
           
        </>
    );
}

export default home