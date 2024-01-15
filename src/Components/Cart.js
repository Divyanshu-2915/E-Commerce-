import React from "react";
import useFetch from "react-fetch-hook";
import axios from "axios";
import './Cart.css';
import { click } from "@testing-library/user-event/dist/click";

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

  const cartItem = (data && data.results) ? data.results.map((item) => ({
    product: item.product,
    user: item.user,
    product_qty: item.product_qty,
    image: item.image,
    id: item.id
  })) : [];

  const removeItem = async (clickedItem) => {
    console.log(clickedItem);
    debugger;
    const deleteItem = await axios(`http://127.0.0.1:8000/cart/${clickedItem}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa',
        'Content-Type': 'application/json'
      }
    }
    );
    if (deleteItem.status === 204) {
      window.location.reload(true);
    }
  }

  return (
    <>
      <h1>HELLO !</h1>
      <h2>Welcome To Cart</h2>
      {cartItem.map((item, index) => (
        <div key={index} className="cart-box">
          <h3 className="cart-head">Product Id - {item.product}</h3>
          <h4 className="cart-head">Product Quantity - {item.product_qty}</h4>
          <h4 className="cart-head"> Cart id - {item.id}</h4>
          <button class='btn btn-outline-primary' onClick={() => removeItem(item.id)}> Remove Item </button>
        </div>
      ))}
    </>
  )
}

export default Cart;