import React from 'react';
import StyledDiv from './styled';

const Container = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>);
};

export default Container;
