import React from "react";
import useFetch from "react-fetch-hook";

export default function PlaceOrder() 
{
  const url = "http://127.0.0.1:8000/order/";
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
  user: item.user,
  product_name: item.product_name,
  total_product: item.total_product,
  image: item.image
}));

  return(
    <>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <h1 id="mens-main">Mens Collection</h1>
    <div class="grid-container">
{alpha.map((item, index) => (
  <button key={index}>
    <div class="product">
      <h3>{item.user}</h3>
      <img src={item.image} alt="Product 1"/>
      <p>{item.product_name}</p>
      <p>{item.total_product}</p>
    </div>
    </button>
))}
</div>
    </>
  )
}