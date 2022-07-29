import { RestApi } from '../../api/weather'
import { GetCurrentWeatherRequest } from './interfaces'

const WEATHER_API_KEY = '?key=0ce9e275cce04c108d9193245222502'

const Weather = {
  getCurrentWeather(params: GetCurrentWeatherRequest) {
    return RestApi.get(`/current.json${WEATHER_API_KEY}&lang=pt`, {
      ...params
    })
  }
}

export default Weather
