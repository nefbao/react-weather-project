import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Current.css"

export default function Current({ data }){
    // Set Icon --------------------------------------------
     let src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    // Set Current Day -------------------------------------
    let now = new Date();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let currentDay = days[now.getDay()];
    // Set Current Time -----------------------------------
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let currentTime = "";
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (hour < 10) {
        currentTime = `0${hour}:${minutes}`;
    } else {
        currentTime = `${hour}:${minutes}`;
    }
    return(
        <div className="Current">
            <div className="icon"><img src={src} alt="weather icon"></img></div>
            <div className="currentData">
                <div className="degree">
                    {Math.round(data.current.temp)} <span className="unit"> ℃ | ℉</span>
                </div>
                <div className="currentDay">{currentDay}</div>
                <div className="currentTime">{currentTime}</div>
            </div>
            <div className="CurrentDetails">
                <div className="currentDescription m_title">{data.current.weather[0].description}</div>
                <div className="currentWind">Wind Speed: {Math.round(data.current.wind_speed)} km/h</div>
                <div className="currentHumidity">Humidity: {data.current.humidity}%</div>
            </div>
        </div>
    );
}