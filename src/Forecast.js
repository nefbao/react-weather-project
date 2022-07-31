import React from "react";
import "./Forecast.css"

export default function Forecast(props){
    // set Icon ------------------------------------------------------------------------
    let src = `http://openweathermap.org/img/wn/${props.data.daily[props.index].weather[0].icon}@2x.png`;
        return(
            <div className="Forecast">
                <div className="forecastDay">Sun, Jul31</div>
                <div className="forecastIcon">
                    <img src={src} alt="forecast weather icon" />
                </div>
                <div className="forecastHighestDegree">↑{Math.round(props.data.daily[props.index].temp.max)}℃</div>
                <div className="forecastLowestDegree">↓{Math.round(props.data.daily[props.index].temp.min)}℃</div>
            </div>
        )
}