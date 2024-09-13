import { useMemo, useState } from 'react'
import { debounce } from 'debounce'
import { useQuery } from 'react-query'
import WeatherApi from '../../resources/services/weather'
import { WeatherDetails, Search } from './sections'
import { HomeStyled } from './styles'

const Home = () => {
  const [searchValue, setSearchValue] = useState({ q: '' })

  const {
    data: weather,
    isFetching: loading,
    error,
    refetch
  } = useQuery(['weather'], () => WeatherApi.getCurrentWeather(searchValue), {
    enabled: false
  })

  const refetchDebounced = useMemo(() => debounce(refetch, 500), [refetch])

  const handleChange = (event) => {
    const { value } = event.target

    setSearchValue({ q: value })
  }

  const handleSearch = () => {
    refetchDebounced()
  }

  return (
    <HomeStyled>
      <Search
        onChange={handleChange}
        value={searchValue.q}
        onClick={handleSearch}
        loading={loading}
      />
      {weather && !loading && <WeatherDetails data={weather} error={error} />}
    </HomeStyled>
  )
}

export default Home
