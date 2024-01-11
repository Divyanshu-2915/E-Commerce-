import React from "react";
import useFetch from "react-fetch-hook";
import './Cart.css';

function Cart() {
  const baseURL = 'http://127.0.0.1:8000/cart/';
  const { data } = useFetch(baseURL,
    {
      method: 'GET',
      headers: {
        'Authorization': 'token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa',
        'Content-Type': 'application/json'
      }
    });

  const cartItem = (data && data.results) ?  data.results.map((item) => ({
    product: item.product,
    user: item.user,
    product_qty: item.product_qty,
    image: item.image
  })) : [];

  console.log(data);

  return (
    <>
      <h1>HELLO !</h1>
      <h2>Welcome To Cart</h2>
      {cartItem.map((item, index) => (
        <div key={index}>
          <img src={item.image} />
          <h4>Product Id - {item.product}</h4>
          <p>Product Quantity - {item.product_qty}</p>
          <p>User - {item.user}</p>
        </div>
      ))}
    </>
  )
}

export default Cart;

/*

function Cart()
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
    const alpha = data.results.map((item) => ({
    name: item.name,
    description: item.description,
    price: item.price,
    image: item.image,
    id: item.id,
    category: item.category
  }));

      if(item.id === item.product)
}

 */