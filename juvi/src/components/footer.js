import React from "react";

export const footer = () => {
  return (
    <>
      <footer>
        <section className="footer-area-bottom">
          <div className="container">
            <div className="row-footer">
              <div className="col-md-12">
                <div className="footer-icons">
                  <ul>
                    <li>
                      <a href="http://facebook.com">
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com">
                        <span className="ti-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com">
                        <span className="ti-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="http://youtube.com">
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
                  <a href="#">Privacy Policy</a> |{" "}
                  <a href="#">Terms & Condition</a>
                </div>
                <div className="copyright text-center">
                  <p>
                    &copy; Copyright 2022. |{" "}
                    <strong>
                      <a href="#"> Juvi </a>
                    </strong>{" "}
                    | All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default footer;
