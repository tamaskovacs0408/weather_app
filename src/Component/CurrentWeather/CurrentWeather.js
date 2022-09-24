import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
        </div>
      </div>
      <div className="center">
        <p className="temperature">{(data.main.temp).toFixed(1)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{(data.main.feels_like).toFixed(1)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{((data.wind.speed) * 3.6).toFixed(1)} km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Clouds</span>
            <span className="parameter-value">{data.clouds.all}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value pressure">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
