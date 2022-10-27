import React from "react";
import Card from "./Card";
import "./SecondCol.css";

export default function SecondCol() {
  return (
    <div className="col-8 col-color">
      <form id="search-location">
        <div className="row search-row">
          <div className="col-9 search-box">
            <input
              type="text"
              className="form-control"
              id="input-location"
              placeholder="Enter location"
            />
          </div>
          <div className="col-3 submit-button">
            <input
              type="submit"
              value="Search"
              className="btn btn-success"
            ></input>
          </div>
        </div>
      </form>

      <p className="quote">"Three days rain will empty any sky"</p>

      <div className="row">
        <p className="days">Next week</p>
      </div>
      <div className="row row-days">
        <div className="col-2 weather-forecast">
          <Card />
        </div>
        <div className="col-2 weather-forecast">
          <Card />
        </div>
        <div className="col-2 weather-forecast">
          <Card />
        </div>
        <div className="col-2 weather-forecast">
          <Card />
        </div>
        <div className="col-2 weather-forecast">
          <Card />
        </div>
        <div className="col-2 weather-forecast">
          <Card />
        </div>
      </div>
    </div>
  );
}
