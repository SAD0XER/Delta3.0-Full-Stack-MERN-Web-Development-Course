import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] =
    useState();

  const newWeatherInfo = (newWeatherInfo) => {
    setWeatherInfo(newWeatherInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "initial" }}>Weather App</h1>
      <small style={{ padding: "0 1rem", color: "grey", fontStyle: "italic" }}>
        It is a mini React project using Material UI.
      </small>
      <hr />
      <SearchBox newWeatherInfo={newWeatherInfo} />
      {weatherInfo && <WeatherInfo info={weatherInfo} />}
    </div>
  );
}
