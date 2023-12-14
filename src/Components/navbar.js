import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { faCartShopping, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios, { Axios } from "axios";

function Navbar() {
  library.add(fas)
  const checkSearch = () => {
    const url = "http://127.0.0.1:8000/product/";
    const { data } = axios(url,
      {
        method: 'GET',
        headers: {
          'Authorization': 'token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa',
          'Content-Type': 'application/json'
        }
      });

    const b = data.map((item) => ({
      name: item.name,
    }));
    const a = document.getElementById('navbar-search').value;
    console.log(a);
    return (
      <>
        {b.map((item, index) => (
          <button key={index}>
            <h3 id='item-name'>{item.name}</h3>
          </button>
        ))}
      </>
    )
  }

  return (
    <>
      <nav id="navbar-main">
        <img src='./IMAGES/logo.png' id="nav-logo" alt="company-logo" />
        <div id="main-box-one">
          <form id="navbar-form">
            <input type="search" id="navbar-search" onKeyUp={checkSearch} />
            <button type="search" id="navbar-btn">Search</button>
          </form>
          <div id="navbar-inherit-box">
            <Link to='/Cart' style={{ textDecoration: 'none', color: 'black' }}>
              <FontAwesomeIcon icon={faCartShopping} id="navbar-cart" />
            </Link>
            <button id="navbar-signin">
              <Link to='/sample' style={{ textDecoration: 'none', color: '#7f5539' }}>SignUp/Login</Link>
            </button>
          </div>
        </div>
        <ul id="navbar-list-one">
          <li><Link to='/Categories' style={{ textDecoration: 'none', color: '#7f5539' }}>All Products </Link></li>
          <li><Link to='/Products' style={{ textDecoration: 'none', color: '#7f5539' }}> Mens </Link></li>
          <li> Womens </li>
          <li> Acessories </li>
          <li> Shoes </li>
          <li> <Link to='/About' style={{ textDecoration: 'none', color: '#7f5539' }}> About </Link></li>
          <li> <Link to='/Contact' style={{ textDecoration: 'none', color: '#7f5539' }}> Contact </Link></li>
        </ul>
      </nav>
      <div className="banner">
        <div id="banner-box">
          <h2> Anime Attire </h2>
          <h4>Your Best Partner For </h4>
        </div>
      </div>
      <div>
        <div id="main-product-box">
          <ul id="products-list">
            <li><a href="/" ><div className="products-box"><img alt="product-chain" className="product-bar" src="../IMAGES/mpi1.jpg" /></div></a></li>
            <li><a href="/" ><div className="products-box"><img alt="product-chain" className="product-bar" src="../IMAGES/mpi2.jpeg" /></div></a></li>
            <li><a href="/" ><div className="products-box"><img alt="product-chain" className="product-bar" src="../IMAGES/mpi3.jpg" /></div></a></li>
            <li><a href="/" ><div className="products-box"><img alt="product-chain" className="product-bar" src="../IMAGES/mpi4.jpeg" /></div></a></li>
            <li><a href="/" ><div className="products-box"><img alt="product-chain" className="product-bar" src="../IMAGES/mpi1.jpg" /></div></a></li>
          </ul>
        </div>
      </div>
      <section>
      </section>
    </>
  )
}


export default Navbar;
