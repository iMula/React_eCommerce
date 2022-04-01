// import React from 'react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hero from './images/hero-image.jpeg'
 
const heroImage = {
 backgroundImage:`url(${hero})`
}
 
export default class products extends React.Component {
 
 componentDidMount(){
     axios.get('http://localhost:3001/products')
   .then(res => {
     const products = res.data;
     this.setState({ products });
   });
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
 
        <section className="product-list">
      <h1>New Releases</h1>
      
      <section className="product-container">

 {this.state.products.map((card) => {
  return (
    <section className="card">
          <div className="pictures">
            <img src={card.image} alt="cardImage" />
          </div>
          <div className="title">{card.title} </div>
           <div className="text">{card.productDesc}</div>
           <div className="text">{card.price}</div>
          <div>
            <button className="buy-button">Buy Now</button>
          </div>
        </section>
 
     
     )
    })}
      </section>
      </section>
  </>
  )
  }
}
