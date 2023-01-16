type WeatherResponse = {
    weather: Weather
}

type Weather = {
    current_weather: CurrentWeather
    daily: DailyWeather
    hourly: HourlyWeather
}

type CurrentWeather = {
    time: number
    temperature: number
    windspeed: number
    weathercode: number
}

type DailyWeather = {
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    apparent_temperature_max: number[]
    apparent_temperature_min: number[]
    precipitation_sum: number[]
    weathercode: number[]
    time: number[]
}

type HourlyWeather = {
    time: number[]
    temperature_2m: number[]
    apparent_temperature: number[]
    precipitation: number[]
    weathercode: number[]
    windspeed_10m: number[]
}