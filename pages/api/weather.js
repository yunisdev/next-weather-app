class OpenWeatherResponse {
  constructor(data) {
    this.longitude = data.coord.lon
    this.latitude = data.coord.lat
    this.weather_type = data.weather[0].main
    this.weather_type_desc = data.weather[0].description
    this.weather_type_icon = data.weather[0].icon
    this.base = data.base
    this.temperature = data.main.temp
    this.feels_like = data.main.feels_like
    this.temp_min = data.main.temp_min
    this.temp_max = data.main.temp_max
    this.pressure = data.main.pressure
    this.humidity = data.main.humidity
    this.wind = data.wind
    this.cloudiness = data.clouds.all
    this.calculated_at = data.dt
    this.timezone = data.timezone
    this.sunrise = data.sys.sunrise
    this.sunset = data.sys.sunset
    this.country = data.sys.country
    this.name = data.name
  }
}

export default (req, res) => {
  const { name } = req.query

  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${name}&appid=${process.env.WEATHER_API_KEY}`)
    .then(response => {
      response.json().then(data => {
        console.log(data)
        console.log("AA")
        if (data.cod == 200) {
          console.log("BB")
          let ow_obj = new OpenWeatherResponse(data)
          console.log(ow_obj)
          res.status(200).json(ow_obj)
        }
        else {
          res.status(400).json({ error: data.message })
        }
      }).catch(e => {
        console.log("ERROR" + e)
      })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
}
