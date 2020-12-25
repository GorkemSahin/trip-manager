import React from 'react';
import { StyledDiv } from './styled';

const Content = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>
  );
};

export default Content;
