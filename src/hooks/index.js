import { useEffect, useState } from 'react';
import theme from '../constants/theme';
import { useWindowWidth } from '@react-hook/window-size';
import { useLocation } from 'react-router-dom';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    setIsMobile(width < theme.mobileWidthLimit);
  }, [width]);

  return isMobile;
};

export const useTitle = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState('Trip Manager');

  useEffect(() => {
    switch (pathname) {
      case '/trip':
        setTitle('Your trips');
        break;
      case '/trip/new':
        setTitle('Trip details');
        break;
      default:
        setTitle('Trip Manager');
        break;
    }
  }, [pathname]);

  return title;
};
