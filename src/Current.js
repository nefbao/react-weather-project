import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Current.css"

export default function Current(props){
return(
    <div className="Current">
        <div className="icon"><img src="http://openweathermap.org/img/wn/02d@2x.png" alt="weather icon"></img></div>
        <div className="currentData">
            <div className="degree">20 
            <span className="unit"> ℃ | ℉</span>
            </div>
            <div className="currentDay"></div>
            <div className="currentTime"></div>
        </div>
        <div className="CurrentDetails">
            <div className="currentDescription">Cloudy</div>
            <div className="currentWind">Wind Speed: 20 km/h</div>
            <div className="currentHumidity">Humidity: 20%</div>
        </div>
    </div>
);
}