import React from "react";
import "./Weather.css";

export default function ForecastData(props) {
    console.log(props);
  let maxTemp = Math.round(props.data.temperature.maximum);
  let minTemp = Math.round(props.data.temperature.minimum);
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="card-body">
        <h2 className="day">{day()}</h2>
        <span>
        <img
        src={require(`./media/small-icons/${props.data.condition.icon}.png`)}
        alt={props.data.condition.icon}
        className="icon-forecast"
        />
        </span>
            <p className="temp-small">{maxTemp}°&zwnj; &zwnj; 
            <span className="t-min">{minTemp}°</span>
        </p>
    </div>
  );
}

       