import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://api.open-meteo.com/v1/forecast";
const params = {
   latitude: 50.4547,
   longitude: 30.5238,
   current: 'temperature_2m,is_day',
   daily: 'temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max',
   timezone: 'auto',
   forecast_days: 1
};

app.use(express.static("public"));

app.get("/", async (req, res) => {
const weather = await axios.get(URL, { params });
// console.log(weatherData);

res.render("index.ejs", { weather: weather.data });
});


app.listen(port, () => {
   console.log(`Listening on port - ${port}`);
});