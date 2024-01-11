
import './Categories.css';
import React from "react";
import useFetch from "react-fetch-hook";
import {useNavigate} from 'react-router-dom'

export default function AllItem() {

  const navigate = useNavigate();

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

  const checkItem = (ClickedItem) => {
    const clickedProduct = alpha.find((item, index) => item === ClickedItem);
    console.log(clickedProduct)
    if (clickedProduct.name === `Men's Accessories`) {
      navigate('/Accessories');
    }
     else if (clickedProduct.name === `Men's Shirts`) {
      navigate('/Fashion');
    } else if (clickedProduct.name === `Men's Shoes`) {
      navigate('/FootWear');
    }

  }

  return (
    <>
      {alpha.map((item, index) => (
        <div class="main-card" key={index}>
          <img src={item.image} class="card-img-top" alt={item.name} />
          <div class="main-card-body">
            <h5 class="main-card-title">{item.name}</h5>
            <p class="main-card-text">{item.description}</p>
            <button class="btn btn-outline-primary" type="button" onClick={() => checkItem(item)}>Shop Now</button>
          </div>
        </div>
      ))}

    </>
  );
}

//---