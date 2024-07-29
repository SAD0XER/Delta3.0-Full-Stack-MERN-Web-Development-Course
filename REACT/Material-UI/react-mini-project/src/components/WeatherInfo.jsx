import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./WeatherInfo.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function WeatherInfo({ info }) {
  let HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTgwOTN8MHwxfHNlYXJjaHw4fHxob3QlMjB3ZWF0aGVyfGVufDB8fHx8MTcyMTM3NTEzNHww";
  let COLD_URL =
    "https://images.unsplash.com/photo-1613082448174-9edaee09732f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="WeatherInfo">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info?.main?.humidity > 80 ? RAIN_URL : info?.main?.temp < 15 ? COLD_URL : HOT_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="city-name">
            {info?.name}
            {info?.main?.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info?.main?.temp < 15 ? (
              <AcUnitIcon />
            ) : (
              <WbSunnyIcon />
            )}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div" className="city-name">
            <p>
              Todays wheather is like <i>{info?.weather[0]?.description}</i> and it feels like {info?.main?.feels_like}&deg;C.
            </p>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature: {info?.main?.temp}&deg;C</p>
            <p>Minimum Temperature: {info?.main?.temp_min}&deg;C</p>
            <p>Maximum Temperature: {info?.main?.temp_max}&deg;C</p>
            <p>Humidiy: {info?.main?.humidity}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
