
import './Products.css';
import React from "react";
import useFetch from "react-fetch-hook";

export default function Mens() {
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
    id: item.id,
    category: item.category
  }));

  return (
    <>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 id="mens-main">Mens Collection</h1>
      <div class="grid-container">
        {alpha.map((item, index) => (
          <a key={index} target='_parent' href={`Token.js?itemName=${encodeURIComponent(item.name)}`}>
            <button>
              <div class="product">
                <h3 id='item-name'>{item.name}</h3>
                <img src={item.image} alt={item.name} />
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </button>
          </a>
        ))}
      </div>
    </>
  )
}



