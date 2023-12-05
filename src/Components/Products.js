
import './Products.css';
import React from "react";
import useFetch from "react-fetch-hook";

export default function Mens() 
{
  const url = "http://127.0.0.1:8000/product/";
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
  price: item.price,
  image: item.image,
}));

  return(
    <>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <h1 id="mens-main">Mens Collection</h1>
    <div id='grid-container'>
{alpha.map((item, index) => (
  <button key={index}>
        <div id='grid-item'>
          <h2 id="mens-heading">{item.name}</h2>
          <img id="mens-images" src={item.image} alt={item.name} />
          <p>{item.price}</p>
          <p id="mens-discription">{item.description}</p>
        </div>
        </button>
))}
</div>
    </>
  )
}


//---

/*

//--

const url = "http://127.0.0.1:8000/product/";
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
  price: item.price,
  image: item.image,
}));

return (
<>
<h1 id="mens-main">Mens Collection</h1>
{alpha.map((item, index) => (
  <button key={index}>
        <div id='mens-section'>
          <h2 id="mens-heading">{item.name}</h2>
          <img id="mens-images" src={item.image} alt={item.name} />
          <p>{item.price}</p>
          <p id="mens-discription">{item.description}</p>
        </div>
        </button>
      ))}
</>
);
*/

