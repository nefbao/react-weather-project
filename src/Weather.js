import React, { useState } from "react";
import "./Weather.css"
import Current from "./Current";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(){

    const [weatherData, setWeatherData] = useState({});
    const [ready,setReady]=useState(false);
    const [displayedCity, setdisplayedCity] = useState("Mashhad");
    let city="Mashhad";

    function displayForecast(response) {
        setWeatherData(response.data);
        setReady(true);
    }
    function handleResponse(response){
        setdisplayedCity(response.data.name);
        let coord = response.data.coord;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&appid=165b70d9de0283218fc2471a0ff56e01&units=metric`;
        axios.get(url).then(displayForecast);
    }   
    function receiveData(event){
        event.preventDefault();
        search();
    }
    function changeCity(event){
        city=event.target.value;
    }
    function search(){
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=165b70d9de0283218fc2471a0ff56e01&units=metric`;
        axios.get(apiUrl).then(handleResponse)
    }
    
    if (ready) {
        return(
            <div className="Weather">
                <form className="mb-5 " onSubmit={receiveData}>
                    <input className="form-control searchInput" type="search" placeholder="Type a city name" aria-label="Search" onChange={changeCity}/>
                    <button className="searchButton " type="submit">Search</button>
                </form>
                <h1 className="text-center">{displayedCity}</h1>
                <Current data={weatherData} />
                <div className="forecast mt-5 mb-2">
                    <Forecast data={weatherData} index={1} />
                    <Forecast data={weatherData} index={2} />
                    <Forecast data={weatherData} index={3} />
                    <Forecast data={weatherData} index={4} />
                    <Forecast data={weatherData} index={5} />
                </div>
            </div>
        );
    }else{
        search();
        return "Loading...";
    }
}