import React from 'react';
import { StyledDiv } from './styled';

const Div = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>
  );
};

export default Div;
