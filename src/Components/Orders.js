function Component() {

    var jsonData1 = {
  
      "name": "alan", 
      "age": 23,
      "username": "aturing"
  
    }
  
    var jsonData2 = {
      
      "name": "john", 
      "age": 29,
      "username": "__john__"
      
    }
  
    function handleClick() {
      
      var formData = new FormData();
      formData.append('json1', JSON.stringify(jsonData1));
      formData.append('json2', JSON.stringify(jsonData2));
  
      // Send data to the backend via POST
      fetch('http://-----------:8080/', {
  
        method: 'POST', 
        mode: 'cors', 
        body: formData // body data type must match "Content-Type" header
  
      })
    }
  
    return (
      <div onClick={handleClick} style={{
        textAlign: 'center',
        width: '100px',
        border: '1px solid gray',
        borderRadius: '5px'
      }}>
        Send data to backend
      </div>
    );
  
  }
  
  export { Component };


/*
import React from "react";
import useFetch from "react-fetch-hook";
export default function Mens() {
const { isLoading, error, data } = useFetch("http://127.0.0.1:8000/order/");
if (isLoading) return "Loading...";
if (error) return "Error!";
const alpha = data.results.map((item) => ({
    user: item.user,
    name: item.product_name,
    quantity: item.total_product
}));

return (
<>
<h1 id="mens-main">Mens Collection</h1>
{alpha.map((item, index) => (
        <div key={index} id='mens-section'>
          <h2 id="mens-heading">{item.user}</h2>
            <p> {item.name}</p>
          <p id="mens-discription">{item.quantity}</p>
        </div>
      ))}
</>
);
}
*/
