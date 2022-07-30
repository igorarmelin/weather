import React from 'react'
import { QueryClientProvider } from 'react-query'
import Routes from './routes'
import { queryClient } from './resources/api/queryClient'
import GlobalStyles from './commons/styles/globalStyles'

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>
)

export default App
