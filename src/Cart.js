import React from "react";

function Cart()
{
    const url = new URL(
        "http://127.0.0.1:8000/cart/"
    );
    
    const data = {
        "user":1,
        "product":1,
        "product_qty": 2,
        "image": ""
        }
    const headers = {
        "Authorization": "token 8bb6c14df69a733dfc1d8dbb26341c1f9cdf84fa",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    })
        .then(response => response.json());
}

export default Cart;