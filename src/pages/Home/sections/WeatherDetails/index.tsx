import { Tooltip, Typography } from '@mui/material'
import { CardStyled } from './styles'

const WeatherDetails = ({ data }) => {
  return (
    <CardStyled>
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
    </CardStyled>
  )
}

export default WeatherDetails
