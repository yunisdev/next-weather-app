import { NextApiRequest, NextApiResponse } from 'next'
import WeatherData from "../../types/WeatherData";

const HandleResponse = (data:any): WeatherData => {
  const weatherData : WeatherData = {
    longitude: data.coord.lon,
    latitude: data.coord.lat,
    weather_type: data.weather[0].main,
    weather_type_desc: data.weather[0].description,
    weather_type_icon: data.weather[0].icon,
    base: data.base,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    temp_min: data.main.temp_min,
    temp_max: data.main.temp_max,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: data.wind,
    cloudiness: data.clouds.all,
    calculated_at: data.dt,
    timezone: data.timezone,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    country: data.sys.country,
    name: data.name,
  }
  return weatherData
}

type Error = {
  error: string
}

export default (req: NextApiRequest, res: NextApiResponse<WeatherData | Error>) => {
  const { name } = req.query

  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=${process.env.WEATHER_API_KEY}`)
    .then(response => {
      response.json().then(data => {
        console.log(data)
        if (data.cod == 200) {
          let w_data = HandleResponse(data)
          console.log(w_data)
          res.status(200).json(w_data)
        }
        else {
          res.status(400).json({ error: data.message })
        }
      }).catch(error => {
        res.status(400).json({ error })
      })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
}
