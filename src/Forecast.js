import React from "react";
import "./Forecast.css"

export default function Forecast(){
    return(
        <div className="Forecast">
            <div className="forecastDay">Sun, Jul31</div>
            <div className="forecastIcon">
                <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="forecast weather icon" />
            </div>
            <div className="forecastHighestDegree">↑32℃</div>
            <div className="forecastLowestDegree">↓23℃</div>
        </div>
    )
}