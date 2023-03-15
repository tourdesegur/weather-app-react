import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardForecast.css";
import ForecastData from "./ForecastData";

export default function CardForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  /*const [numberToMap, setNumberToMap] = useState(5);
  const minHandler = () => setNumberToMap(2);
  const maxHandler = () => setNumberToMap(5);
  
*/
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  /*useEffect(() => {
    const minMedia = window.matchMedia("(max-width: 767px)");
    minMedia.addEventListener("change", minHandler);

    const maxMedia = window.matchMedia("(min-width: 768px)");
    maxMedia.addEventListener("change", maxHandler);
    
    return () => {
      minMedia.removeEventListener("change", minHandler);
      maxMedia.removeEventListener("change", maxHandler);
    };
  })
  
*/
  function handleApiCall(response) {
    console.log(response);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="BlockForecast">
        <div className="row row-weather">
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


