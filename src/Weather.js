import React, { useState } from "react";
import "./Weather.css"
import Current from "./Current";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";
import axios from "axios";

export default function Weather(){
    const [dataset, setData] = useState({});
    const [displayedCity,setDisplayedCity]=useState("Mashhad");
    let city="mashhad"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d9a58b41020207ced9d1a03a3fe8817&units=metric`;
    function handleResponse(response){
        console.log(response.data);
        setDisplayedCity(response.data.name);
        setData(response.data);
    }
    function receiveData(event){
        event.preventDefault();
        axios.get(apiUrl).then(handleResponse)
    }
    return(
        <div className="Weather">
            <form className="mb-5 " onSubmit={receiveData}>
                <input className="form-control searchInput" type="search" placeholder="Type a city name" aria-label="Search"/>
                <button className="searchButton " type="submit">Search</button>
            </form>
            <h1 className="text-center">{displayedCity}</h1>
            <Current data={dataset} />
            <div className="forecast mt-5 mb-2">
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
                <Forecast />
            </div>
        </div>
    );
}