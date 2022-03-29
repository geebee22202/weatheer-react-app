import React from "react";
import axios from "axios";
import { Puff } from "react-loader-spinner";

export default function Weather(props) {
  function handleSearch(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }
  let apiKey = "935a08ec240b922ff7c41b1be851c24f";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(handleSearch);
  return <Puff color="#00BFFF" height={100} width={100} timeout={3000} />;
}
