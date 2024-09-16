import { useState, useCallback } from 'react'
import { debounce } from 'debounce'
import { useQuery } from 'react-query'
import WeatherApi from '../../resources/services/weather'
import { WeatherDetails, Search } from './sections'
import { HomeStyled } from './styles'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Typography } from '@mui/material'

const Home = () => {
  const [searchValue, setSearchValue] = useState({ q: '' })

  const {
    data: weather,
    isFetching: loading,
    error,
    refetch
  } = useQuery(
    ['weather', searchValue.q],
    () => WeatherApi.getCurrentWeather(searchValue),
    { enabled: false }
  )

  const handleSearch = useCallback(
    debounce(() => {
      if (searchValue.q.trim()) {
        refetch()
      }
    }, 500),
    [searchValue.q, refetch]
  )

  const handleChange = (event) => {
    setSearchValue({ q: event.target.value })
  }

  return (
    <HomeStyled>
      <Search
        onChange={handleChange}
        value={searchValue.q}
        onClick={handleSearch}
        loading={loading}
      />
      {loading ? (
        <Skeleton highlightColor="#2D2A32" width={375} height={215} borderRadius="10px" />
      ) : weather ? (
        <WeatherDetails data={weather} />
      ) : (
        error && (
          <Typography variant="h6">
            Nenhum resultado encontrado para a sua pesquisa
          </Typography>
        )
      )}
    </HomeStyled>
  )
}

export default Home
