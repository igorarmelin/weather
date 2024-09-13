import React from 'react'
import { Tooltip, Typography } from '../../../../components'
import { CardStyled } from './styles'

const WeatherDetails = ({ data, error }) => {
  return (
    <CardStyled>
      {error ? (
        <Typography variant="h6">
          Nenhum resultado encontrado para a sua pesquisa
        </Typography>
      ) : (
        <>
          <Typography variant="h4" fontWeight="bold">
            {data.location.name.toUpperCase()}
          </Typography>
          <Tooltip placement="right" arrow title={data.current.condition.text}>
            <img src={data.current.condition.icon} />
          </Tooltip>
          <Typography variant="h4" fontWeight="bold">
            {Math.round(data.current.temp_c)}°C
          </Typography>
        </>
      )}
    </CardStyled>
  )
}

export default WeatherDetails
