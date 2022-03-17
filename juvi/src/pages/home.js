import React from 'react'

export const home = () => {
    return (
        <>
            <header>
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




            {/<!-- Start Footer bottom Area -->/}
            <footer>
                <section className="footer-area-bottom">
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
                                        &copy; Copyright 2022. | <strong><a href="#"> Juvi </a></strong> | All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    );
}