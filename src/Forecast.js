import React from "react";
import "./Forecast.css"
import Icon from "./Icon"

export default function Forecast(props){
    let date = new Date(props.data.daily[props.index].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let month=date.getMonth()
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] 
    let dayOfMonth = date.getUTCDate();
        return(
            <div className="Forecast">
                <div className="forecastDay">{days[day]}, {months[month]} {dayOfMonth}</div>
                <div className="forecastIcon">
                    <Icon icon={props.data.daily[props.index].weather[0].icon} size={50} />
                </div>
                <div className="forecastHighestDegree">↑{Math.round(props.data.daily[props.index].temp.max)}℃</div>
                <div className="forecastLowestDegree">↓{Math.round(props.data.daily[props.index].temp.min)}℃</div>
            </div>
        )
}