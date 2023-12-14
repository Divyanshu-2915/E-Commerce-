import './fun.css';
import React from "react";
import useFetch from "react-fetch-hook";

export default function MensProducts() 
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
        <div  className="slide-container">
        {alpha.map((item, index) => (
        <div className="wrapper">
                <div className="clash-card barbarian">
                    <div className="clash-card__image">
                        <img src={item.image} alt="barbarian" />
                    </div>
                    <div className="clash-card__level clash-card__level--barbarian">{item.price}</div>
                    <div className="clash-card__unit-name">{item.name}</div>
                    <div className="clash-card__unit-description">
                        {item.description}
                    </div>

                    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
                        <div className="one-third">
                            <div className="stat">20<sup>S</sup></div>
                            <div className="stat-value">Training</div>
                        </div>

                        <div className="one-third">
                            <div className="stat">16</div>
                            <div className="stat-value">Speed</div>
                        </div>

                        <div className="one-third no-border">
                            <div className="stat">150</div>
                            <div className="stat-value">Cost</div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}