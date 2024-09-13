import { Button, TextField } from '@mui/material'

const Search = ({ onChange, value, onClick, loading }) => {
  return (
    <div style={{ display: 'flex' }}>
      <TextField
        sx={{ mr: 2, ':focus': { color: '#2D2A32' } }}
        fullWidth
        onChange={onChange}
        value={value}
        color="primary"
        InputProps={{
          style: {
            color: '#2D2A32'
          }
        }}
        placeholder="Busque por uma cidade..."
      />
      <Button
        sx={{
          height: '56px',
          backgroundColor: '#2D2A32',
          ':hover': { backgroundColor: '#45414d' },
          fontWeight: 'bold'
        }}
        size="large"
        variant="contained"
        onClick={onClick}
        disabled={loading}
      >
        Pesquisar
      </Button>
    </div>
  )
}

export default Search
