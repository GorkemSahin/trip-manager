import React from 'react';
import Layout from './layout';
import theme from './constants/theme';
import Pages from './pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMobile } from './hooks/';

function App() {
  const isMobile = useMobile();
  return (
    <ThemeProvider theme={{ isMobile, ...theme }}>
      <BrowserRouter>
        <Layout>
          <Pages/>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
