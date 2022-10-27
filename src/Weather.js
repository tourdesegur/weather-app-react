import React, { useState } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";

export default function Weather() {
  let [temp, setTemp] = useState();
  function getWeather(response) {
    console.log(response.data.main.temp);
    setTemp(response.data.main.temp);
  }

  let key = "bb532f26c3227c8856eb9d787a55f819";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${key}&units=metric`;
  axios.get(url).then(getWeather);

  return (
    <div>
      <h1>The temperature in Lisbon is {Math.round(temp)}</h1>
      <LoadingIcons.Bars />
    </div>
  );
}
