type Wind = {
    speed: number;
    deg: number;
}

type WeatherData = {
    longitude: number
    latitude: number
    weather_type: string
    weather_type_desc: string
    weather_type_icon: string
    base: string
    temperature: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    wind: Wind
    cloudiness: any
    calculated_at: number
    timezone: number
    sunrise: number
    sunset: number
    country: string
    name: string
}

export default WeatherData