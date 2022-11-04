import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardForecast.css";
import ForecastData from "./ForecastData";

export default function CardForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleApiCall(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="BlockForecast">
        <div className="row">
          {forecast.map(function (infoForecast, index) {
            if (index < 5) {
              return (
                <div className="card" key={index}>
                <ForecastData data={infoForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = `oa394f37d882at8a5980fd67ed5ff90b`;
    let city = props.city;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(handleApiCall);
    return null;
  }
}


