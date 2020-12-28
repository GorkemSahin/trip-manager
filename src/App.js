import React from 'react';
import { Provider } from 'react-redux';
import store from './appState';
import Layout from './layout';
import theme from './constants/theme';
import Pages from './pages';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMobile } from './hooks/';

function App() {
  const isMobile = useMobile();
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ isMobile, ...theme }}>
        <BrowserRouter>
          <Layout>
            <Pages/>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
