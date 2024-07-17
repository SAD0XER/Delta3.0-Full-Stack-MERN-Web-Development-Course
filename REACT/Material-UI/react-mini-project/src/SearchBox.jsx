import { useState } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "463919a118cb3eda46274f6bd7370a86";

  const [city, setCity] = useState("");

  // Function to fetch weather data for the entered city through the API.
  const getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // Creating query string.
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    // Extracting required data for the UI from JSON response.
    let result = {
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
      city: jsonResponse.name,
    };
    console.log(result);
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(""); // Reseting the input values for next input.
    getWeatherInfo(); // As soon as form submission, the weather method will be called.
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button type="submit" variant="contained">Search</Button>
      </form>
    </div>
  );
}
