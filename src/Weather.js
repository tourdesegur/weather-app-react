import React, { useState } from "react";
import axios from "axios";
import CardForecast from "./CardForecast";
import FormatDate from "./FormatDate";
import "./Weather.css";

export default function Weather(props) {
    const [weather, setWeather] = useState({ ready: false });
    const [city, setCity] = useState(props.cityDefault);

    function showTemp(response) {
        console.log(response);
        setWeather({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            temp: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            icondescription: response.data.condition.icon,
          });
    }

    function search() {
        const apiKey = "oa394f37d882at8a5980fd67ed5ff90b";
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(url).then(showTemp);
      }
     
      function handleSubmit(event) {
        event.preventDefault();
       search();
      }

      function changeCity(event) {
        setCity(event.target.value);
      }
    
if (weather.ready) {
    return (
        <div className="row">

            <div className="col-4 col-main">

                <button type="submit" className="btn btn-current">
                Current city
                </button>
                <h1 className="city-title">{weather.city}</h1>
                <h2 className="subtitle-date-time">
                    <FormatDate date={weather.date}/> 
                    <br />
                    <span className="description">{weather.description}</span>
                </h2>
                <span className="main-icon">
                    <img
                        src={require(`./media/${weather.icondescription}.png`)}
                        className="main-icon"
                        alt={weather.icondescription}
                     />
                </span>

                <div className="row">
                    <div className="col-7">
                        <div>
                             <span className="temp">{Math.round(weather.temp)}</span> <span className="celsius">°</span>
                        </div>
                    </div>
                    <div className="col-5">
                         <p className="p-info">
                            <span className="humidity">Humidity: {Math.round(weather.humidity)}%</span>
                            <br />
                            <span className="wind">Wind: {Math.round(weather.wind)} km/h</span>
                        </p>
                    </div>
                </div>

            </div>
    
            <div className="col-8 col-color">
                <form className="search-location" onSubmit={handleSubmit}>
                    <div className="row search-row">
                        <div className="col-9 search-box">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter location"
                            autoFocus="on"
                            onChange={changeCity}
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
                    <div className="weather-forecast">
                    <CardForecast city={weather.city}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
} else {
    search();
    return "Loading";
}
}