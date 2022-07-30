import React from 'react'
import { TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormStyled } from './styles'

const Search = ({ onChange, value, onClick, loading }) => {
  return (
    <FormStyled>
      <TextField
        sx={{ mb: 1 }}
        fullWidth
        onChange={onChange}
        value={value}
        color="primary"
        InputProps={{
          style: {
            color: '#FFF',
            backgroundColor: '#2b235a'
          }
        }}
        placeholder="Busque por uma cidade..."
      />
      <LoadingButton size="large" variant="contained" onClick={onClick} loading={loading}>
        Buscar
      </LoadingButton>
    </FormStyled>
  )
}

export default Search
