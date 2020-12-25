import React from 'react';
import { StyledDiv } from './styled';

const Header = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>
  );
};

export default Header;
