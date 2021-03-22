import React from 'react'
import GlobalStyles from './styles/global'

import Routes from './routes'

import AppProvider from '../src/hooks'

function App() {
  return (
    <React.Fragment>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </React.Fragment>
  )
}

export default App