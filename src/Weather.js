import React from "react";
import "./Weather.css"
import Current from "./Current";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";

export default function Weather(){
    return(
        <div className="Weather">
            <form className="mb-5">
                <input className="form-control searchInput" type="search" placeholder="Type a city name" aria-label="Search" />
                <button className="searchButton " type="submit">Search</button>
            </form>
            <h1 className="text-center">Mashhad</h1>
            <Current />
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