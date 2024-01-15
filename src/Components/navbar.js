import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import { faCartShopping, fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllItem from "./Categories";

function Navbar() {
  library.add(fas)

  return (
    <>
      {/* */}
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <Link to='/navbar'>
            <a class="navbar-brand">Anime Attire</a>
          </Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      {/* */}
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <Link to='/'>
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/Fashion'>
            <a class="nav-link" href="#">Fashion</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/Accessories'>
            <a class="nav-link" href="#">Accessories</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/FootWear'>
            <a class="nav-link" href="#">Foot Wear</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/About'>
            <a class="nav-link">About</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/Contact'>
            <a class="nav-link" href="#">Contact</a>
          </Link>
        </li>
        <li class="nav-item">
          <Link to='/Cart'>
            <a class="nav-link" href="#">Cart</a>
          </Link>
        </li>
      </ul>
      <br />
      {/* */}
      <br />
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./IMAGES/head1.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className='slider-heading'>First slide label</h5 >
              <p className="slider-para">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./IMAGES/head2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className='slider-heading'>Second slide label</h5>
              <p className="slider-para">Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./IMAGES/head3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className='slider-heading'>Third slide label</h5 >
              <p className="slider-para">Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* */}
      <h2 className="category-head"> Shop By Categories</h2>
      <AllItem />
      <footer>
      </footer>
    </>
  )
}

export default Navbar;