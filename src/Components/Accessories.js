
import './Accessories.css'
import React from "react";
import useFetch from "react-fetch-hook";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Accessories() {

  const navigate = useNavigate();

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

  const addToCart = (clickedItem) => {
    const clickedProduct = alpha.find((item, index) => item === clickedItem);
    if (clickedProduct) {
      const addItem = axios({
        method: 'POST',
        baseURL: 'http://127.0.0.1:8000/cart/',
        headers: {
          'Authorization': 'token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa',
          'Content-Type': 'application/json'
        },
        data: {
          "user": 2,
          "product": clickedProduct.id,
          "product_qty": 2,
          //"image": clickedProduct.image
        },
      });
      navigate('/Cart')
    }

  }

  return (
    <>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <h1 id="mens-main">Mens Accessories Collection</h1>
      <div>
        {alpha.slice(12, 20).map((item, index) => (
          <div class="card mb-3" key={index}>
            <img src={item.image} class="card-img-top" alt={item.name} />
            <div class="card-body">
              <h5 class='card-title'>Product Id - {item.id}</h5>
              <h5 class="card-title">{item.name}</h5>
              <p class="card-text">{item.description}</p>
              <p class="card-text">{item.price}</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-primary me-md-2" type="button">View</button>
                <button class="btn btn-outline-primary" type="button" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Accessories;



