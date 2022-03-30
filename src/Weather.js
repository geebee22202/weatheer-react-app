import React from "react";
import axios from "axios";
import "./Weather.css";
// import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  // const [weather, setWeather] = useState("");

  // function displayWeather(response) {
  //   setWeather({
  //     temperature: response.data.main.temp,
  //     wind: response.data.wind.speed,
  //     humidity: response.data.main.humidity,
  //     icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
  //     description: response.data.weather[0].description,
  //   });
  // }

  // let apiKey = "935a08ec240b922ff7c41b1be851c24f";
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  // axios.get(url).then(displayWeather);
    let weatherData = {
      city: "Arlington",
      date: "Tuesday 9:56p",
      description: "Cloudy",
      imgURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: "65",
      humidity: "45",
      wind: "12",
    };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Type the name of a city..."
              autofocus="on"
              autocomplete="off"
              className="form-control location-search shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{props.city}</h1>
        <ul>
          <li> Last updated: 8:30pm</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temp">
            <img
              src={weatherData.imgURL}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                °<a href="/">F</a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 weather-elements">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
{
  /* <Puff color="#00BFFF" height={100} width={100} timeout={3000} />; */
}
