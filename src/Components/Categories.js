
import './Categories.css';
import React from "react";
import useFetch from "react-fetch-hook";
import { Link } from 'react-router-dom';

export default function AllItem() {
  const url = "http://127.0.0.1:8000/category/";
  const { isLoading, error, data } = useFetch(url,
    {
      method: 'GET',
      headers: {
        'Authorization': 'token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa',
        'Content-Type': 'application/json'
      }
    });
  if (isLoading) return "Loading...";
  if (error) return "Error!";
  const alpha = data.results.map((item) => ({
    name: item.name,
    description: item.description,
    image: item.image,
  }));

  return (
    <>
      <h1 id="mens-main">All Products </h1>
      {alpha.map((item, index) => (
        <Link to='/Products' style={{ textDecoration: 'none', color: 'black' }}>
          <div key={index} id='mens-section'>
            <img id="mens-images" src={item.image} alt={item.name} />
            <h2 id="mens-heading">{item.name}</h2>
            <p id="mens-discription">{item.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

//---


