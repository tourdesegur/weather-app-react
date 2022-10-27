import React from "react";
import "./MainCol.css";

export default function MainCol() {
  return (
    <div className="col-4 col-main">
      <button type="submit" className="btn btn-current" id="current-location">
        Current city
      </button>
      <h1 id="city">Lisbon</h1>
      <h2 className="subtitle-date-time">
        <span className="day-time">Sunday, 16:00</span> <br />
        <span id="description">Partly cloudy</span>
      </h2>
      <span className="main-icon">
        <img
          src={require(`./clouds.png`)}
          className="main-icon"
          id="main-icon"
          alt="Main icon"
        />
      </span>

      <div className="row">
        <div className="col-7">
          <div>
            <span className="temp">22</span> <span className="celsius">°</span>
          </div>
        </div>
        <div className="col-5">
          <p className="p-info">
            <span className="humidity">Humidity: 75%</span>
            <br />
            <span className="wind">Wind: 21 km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
