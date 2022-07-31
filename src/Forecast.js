import React from "react";
import "./Forecast.css"
import Icon from "./Icon"

export default function Forecast(props){
        return(
            <div className="Forecast">
                <div className="forecastDay">Sun, Jul31</div>
                <div className="forecastIcon">
                    <Icon icon={props.data.daily[props.index].weather[0].icon} size={50} />
                </div>
                <div className="forecastHighestDegree">↑{Math.round(props.data.daily[props.index].temp.max)}℃</div>
                <div className="forecastLowestDegree">↓{Math.round(props.data.daily[props.index].temp.min)}℃</div>
            </div>
        )
}