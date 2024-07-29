import { useState, useEffect } from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useGeolocation from "../hooks/useGeolocation";

export default function SearchBox({ newWeatherInfo }) {
  const [city, setCity] = useState(""); // Used to tract the city name from user input.
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    location: { latitude, longitude },
    error,
  } = useGeolocation();

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "463919a118cb3eda46274f6bd7370a86";

  // Function to fetch weather data for the entered city through the API.
  const getWeather = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); // Creating query string.
      let jsonResponse = await response.json();
      if (jsonResponse.cod === "404") throw new Error(jsonResponse.message);
      setIsLoading(false);
      setIsError(false);
      return jsonResponse;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch weather data for the entered city through the API.
  const getCurrentWeather = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
      ); // Creating query string.
      let jsonResponse = await response.json();
      if (jsonResponse.cod === "400") throw new Error(jsonResponse.message);
      setIsLoading(false);
      return jsonResponse;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const newInfo = await getCurrentWeather(); // As soon as form submission, the weather method will be called.
      newWeatherInfo(newInfo);
    };

    fetchCurrentWeather();
  }, []);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCity(""); // Reseting the input values for next input.
    const newInfo = await getWeather(); // As soon as form submission, the weather method will be called.
    newWeatherInfo(newInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="filled"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <Button type="submit" variant="contained" id="btn">SEARCH</Button>
      </form>
      {isError && <p style={{ color: "red" }}>City not found!</p>}
      {isLoading && <span className="loader"></span>}
    </div>
  );
}
