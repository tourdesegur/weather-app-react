import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="day">Mon</h2>
        <span>
          <img
            src={require(`./showerrain.png`)}
            alt=""
            className="icon-forecast"
            id="icon"
          />
        </span>
        <p className="temp-small">
          15°&zwnj; &zwnj; <span className="t-min">9°</span>
        </p>
      </div>
    </div>
  );
}
