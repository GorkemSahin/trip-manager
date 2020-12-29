import React from 'react';
import { SWRConfig } from 'swr';
import Layout from './layout';
import theme from './constants/theme';
import Pages from './pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMobile } from './hooks/';
import fetcher from './utils/swr';

function App() {
  const isMobile = useMobile();

  return (
    <ThemeProvider theme={{ isMobile, ...theme }}>
      <SWRConfig value={{ fetcher }}>
        <BrowserRouter>
          <Layout>
            <Pages/>
          </Layout>
        </BrowserRouter>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default App;
