import React, { useEffect, useRef } from 'react';
import { StyledDiv } from './styled';
import { useLocation } from 'react-router-dom';

// TODO test auto-scroll to top
const Content = ({ children, ...rest }) => {
  const { pathname } = useLocation();
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <StyledDiv ref={ divRef } { ...rest }>
      { children }
    </StyledDiv>
  );
};

export default Content;
