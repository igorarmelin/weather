import { RestApi } from '../../api/weather'
import { GetCurrentWeatherRequest } from './interfaces'

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const Weather = {
  getCurrentWeather(params: GetCurrentWeatherRequest) {
    return RestApi.get(`/current.json?key=${WEATHER_API_KEY}&lang=pt`, {
      ...params
    })
  }
}

export default Weather
