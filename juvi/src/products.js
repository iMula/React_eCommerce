import React from 'react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hero from './images/hero-image.jpeg'

const heroImage = {
  backgroundImage:`url(${hero})`
 }
 

export class AxiosTable extends Component {
  state={
      persons:[]
  }
  componentDidMount(){
      axios.get('http://localhost:3001/products')
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  }
  render() {
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
            
        <div>
        <h6>Filter: </h6>
    <div id="fButtons">
        <button id="button" className="btn btn-light" onclick="filterProduct">Price</button>
        <button id="button" className="btn btn-light" onclick="filterProduct">Size</button>
        <button id="button" className="btn btn-light" onclick="filterProduct">Add to Cart</button>
    </div>
    <div>
    <div id="cardAlign" className="row">
        {
            products.map(record => (
                <div className="col-sm-6">
                    <div id="hide" className="card">
                        <div className="card-body">
                            <img className="card-img" src={ record.image } alt="Card image cap"/>
                            <h4 id="text-bolder"className="card-title"> {record.title}</h4>
                            <p className="card-text"> {record.productDesc}</p>
                            <p className="card-text"> {record.price}</p>
                            <button className="btn btn-primary">Add to cart</button>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  </div>
      )
}
}

export default AxiosTable














{/* // const heroImage = { */}
{/* //  backgroundImage:`url(${hero})`
// }

// export const products = () => { */}
{/* //   return (
//     <> */}
      {/* <header style={heroImage}>
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src="./images/juvi-logo.png" alt="logo" width="125px" />
            </div>
          </div>
        </div>
      </header>
  
      <section className="product-list">
        <h1>New Releases</h1>
  
        <section className="product-container"> */}
          {/*
 <!---first product---> */}
          {/* <section className="card">
            <div className="pictures">
              <img src="./images/Olive-tee.png" alt="olive-tee" />
            </div>
            <div className="text">
              Olive Juvi T-Shirt
              <br/>
              Premium T-Shirt with heavyweight, soft, and sturdy fabric.
              <br /> $15{" "}
            </div>
            <div>
              <button className="buy-button">Buy Now</button>
            </div>
          </section> */}
          {/* <!---first product---> */}
          {/* <br /> */}
          {/* <!--second product--> */}
{/*   
          <section className="card">
            <div className="pictures">
              <img src="images/windbreaker.png" alt="windbreaker" />
            </div>
            <div className="text">
            Double Black Juvi Windbreaker Jacket
             <br/>
             Its mid-weight crinkle woven fabric is unlined for versatility and comfortable layering.
            <br /> $40{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--second product--> */}
         {/* <br /> */}
         {/* <!--third product--> */}
 
         {/* <section className="card">
           <div className="pictures">
             <img src="images/navy-blue-hoodie.png" alt="blue-hoodie" />
           </div>
           <div className="text">
             Navy Blue Juvi Hoodie
             <br/>
             Pullover Hoodie combines classic style with the soft comfort of fleece.
             <br /> $30{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--third product--> */}
         {/* <br /> */}
         {/* <!--fourth product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/Pink-tee.png" alt="pink-tee" />
           </div>
           <div className="text">
             Pink Juvi T-Shirt
             <br/>
             Premium T-Shirt with heavyweight, soft, and sturdy fabric.
             <br /> $15{" "}
           </div>
           <div>
           <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--fourth product--> */}
         {/* <br /> */}
         {/* <!--fifth product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/juvi-totebag.jpeg" alt="totebag" />
           </div>
           <div className="text">
             Juvi Black Tote Bag
             <br/>
             Small canvas tote featuring screen printed logo.
             <br /> $25{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--fifth product--> */}
         {/* <br /> */}
         {/* <!--sixth product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/off-white-tee.png" alt="white-tee" />
           </div>
           <div className="text">
             Tan Juvi T-shirt
             <br/>
             Premium T-Shirt with heavyweight, soft, and sturdy fabric.
             <br /> $20{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--sixth product--> */}
         {/* <br /> */}
         {/* <!--7th product--> */}
         {/* <section className="card">
           <div className="pictures">
           <img src="images/white-hoodie.png" alt="hoodie" />
           </div>
           <div className="text">
             White Juvi Hoodie
             <br/>
             Pullover Hoodie combines classic style with the soft comfort of fleece.
             <br /> $30{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--7th product--> */}
         {/* <br /> */}
         {/* <!--8th product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/juvi-blk-tee.jpeg" alt="black-tee" />
           </div>
           <div className="text">
             Black Juvi T-Shirt
             <br/>
             Premium T-Shirt with heavyweight, soft, and sturdy fabric.
             <br /> $15{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--8th product--> */}
         {/* <br /> */}
         {/* <!--9th product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/juvi-whitetote.jpeg" alt="totebag" />
           </div>
           <div className="text">
             Tan Juvi Tote bag
             <br/>
             Small canvas tote featuring screen printed logo.
             <br /> $20{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--9th product--> */}
         {/* <br /> */}
         {/* <!--10th product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/beanie.png" alt="beanie" />
           </div>
           <div className="text">
             Juvi Beanie
             <br/>
             Foldover design with a knit fabrication, and the iconic Juvi embroidered at the front.
             <br /> $15{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--10th product--> */}
         {/* <br /> */}
         {/* <!--11th product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/Brown-tee.png" alt="brown-tee" />
           </div>
           <div className="text">
             Brown Juvi T-Shirt
             <br/>
             Premium T-Shirt with heavyweight, soft, and sturdy fabric.
             <br /> $12{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section> */}
         {/* <!--11th product--> */}
         {/* <br /> */}
         {/* <!--12th product--> */}
         {/* <section className="card">
           <div className="pictures">
             <img src="images/Black-hoodie.png" alt="blk-hoodie" />
           </div>
           <div className="text">
             Black Juvi Hoodie
             <br/>
             Pullover Hoodie combines classic style with the soft comfort of fleece.
             <br /> $30{" "}
           </div>
           <div>
             <button className="buy-button">Buy Now</button>
           </div>
         </section>
       </section>
//      </section> */}
//    </>
//  );
// };

// export default products;
