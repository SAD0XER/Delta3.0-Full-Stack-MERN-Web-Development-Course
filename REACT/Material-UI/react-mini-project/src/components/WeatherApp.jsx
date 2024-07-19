import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    main: {
      temp: 28.3,
      feels_like: 25.9,
      humidity: 75,
      temp_min: 26.6,
      temp_max: 30.3,
    },
    name: "Mumbai",
    weather: [{ description: "Cloudy" }],
  });

  const newWeatherInfo = (newWeatherInfo) => {
    setWeatherInfo(newWeatherInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <small>It is a mini React project using Material UI.</small>
      <hr />
      <SearchBox newWeatherInfo={newWeatherInfo} />
      <hr />
      <WeatherInfo info={weatherInfo} />
    </div>
  );
}
