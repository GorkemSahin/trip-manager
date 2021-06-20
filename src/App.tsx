import React from 'react'
import { SWRConfig } from 'swr'
import Layout from './layout'
import theme from './constants/theme'
import Pages from './pages'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useResponsiveness } from './hooks'
import { fetcher } from './api'
import GlobalStyle from './globalStyled'

function App() {
  const { isMobile } = useResponsiveness()

  return (
    <ThemeProvider theme={{ isMobile, ...theme }}>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <Layout>
            <Pages />
          </Layout>
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default App
