// import React from 'react'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hero from './images/hero-image.jpeg'
 
const heroImage = {
 backgroundImage:`url(${hero})`
}
 
export class AxiosTable extends React.Component {
 state={
     products:[]
 }
 componentDidMount(){
     axios.get('http://localhost:3001/products')
   .then(res => {
     const products = res.data;
     this.setState({ products });
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
{
  products.map(record => (
 
        <section className="product-list">
      <h1>New Releases</h1>
      <section className="product-container">

      <section className="card">
          <div className="pictures">
            <img src={record.image} alt="cardImage" />
          </div>
          <div className="text">{record.title} </div>
           <div className="card-text">{record.productDesc}</div>
           <div className="card-text">{record.price}</div>
          <div>
            <button className="buy-button">Buy Now</button>
          </div>
        </section>
      </section>
    </section>
       </>
     )
  },    
export default AxiosTable
