import React from "react";
import hero from './images/hero-image.jpeg'

const heroImage = {
  backgroundImage:`url(${hero})`
}


export const products = () => {
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

      <section className="product-list">
        <h1>New Releases</h1>

        <section className="product-container">
          {/* 
<!---first product---> */}
          <section className="card">
            <div className="pictures">
              <img src="./images/juvi-olive-tee.jpeg" alt="olive-tee" />
            </div>
            <div className="text">
              Grey Juvi Tee-Shirt <br /> $15{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!---first product---> */}
          <br />
          {/* <!--second product--> */}

          <section className="card">
            <div className="pictures">
              <img src="images/windbreaker.png" alt="windbreaker" />
            </div>
            <div className="text">
              Double Black Juvi Windbreaker Jacket <br /> $40{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--second product--> */}
          <br />
          {/* <!--third product--> */}

          <section className="card">
            <div className="pictures">
              <img src="images/navy-blue-hoodie.png" alt="blue-hoodie" />
            </div>
            <div className="text">
              Navy Blue Juvi Hoodie <br /> $30{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--third product--> */}
          <br />
          {/* <!--fourth product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/Pink-tee.png" alt="pink-tee" />
            </div>
            <div className="text">
              Pink Juvi Tee-Shirt
              <br /> $15{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--fourth product--> */}
          <br />
          {/* <!--fifth product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/juvi-totebag.jpeg" alt="totebag" />
            </div>
            <div className="text">
              Juvi Black Tote Bag
              <br /> $20{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--fifth product--> */}
          <br />
          {/* <!--sixth product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/off-white-tee.png" alt="white-tee" />
            </div>
            <div className="text">
              Tan Juvi Tee-shirt
              <br /> $20{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--sixth product--> */}
          <br />
          {/* <!--7th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/white-hoodie.png" alt="hoodie" />
            </div>
            <div className="text">
              White Juvi Hoodie <br /> $30{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--7th product--> */}
          <br />
          {/* <!--8th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/juvi-blk-tee.jpeg" alt="black-tee" />
            </div>
            <div className="text">
              Black Juvi Tee-Shirt
              <br /> $15{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--8th product--> */}
          <br />
          {/* <!--9th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/juvi-whitetote.jpeg" alt="totebag" />
            </div>
            <div className="text">
              Tan Juvi Tote bag
              <br /> $20{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--9th product--> */}
          <br />
          {/* <!--10th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/beanie.png" alt="beanie" />
            </div>
            <div className="text">
              Juvi Beanie
              <br /> $12{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--10th product--> */}
          <br />
          {/* <!--11th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/Brown-tee.png" alt="brown-tee" />
            </div>
            <div className="text">
              Brown Juvi Tee-Shirt
              <br /> $12{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
          {/* <!--11th product--> */}
          <br />
          {/* <!--12th product--> */}
          <section className="card">
            <div className="pictures">
              <img src="images/Black-hoodie.png" alt="blk-hoodie" />
            </div>
            <div clasNames="text">
              Black Juvi Hoodie
              <br /> $30{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default products;
