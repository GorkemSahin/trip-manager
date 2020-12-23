import React, { useEffect, useState } from 'react';
import Layout from './layout';
import theme from './contants/theme';
import { ThemeProvider } from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    setIsMobile(width < theme.length.mobileWidthLimit);
  }, [width]);

  console.log(isMobile);

  return (
    <ThemeProvider theme={{ isMobile, ...theme }}>
      <Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
