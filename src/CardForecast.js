import React from "react";
import "./CardForecast.css";

export default function CardForecast() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="day">Mon</h2>
        <span>
          <img
            src={require(`./showerrain.png`)}
            alt=""
            className="icon-forecast"
      
          />
        </span>
        <p className="temp-small">
          15°&zwnj; &zwnj; <span className="t-min">9°</span>
        </p>
      </div>
    </div>
  );
}
