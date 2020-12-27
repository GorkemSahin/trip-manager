import React from 'react';
import StyledSpan from './styled';

const Label = ({ children, ...rest }) => {
  return (
    <StyledSpan { ...rest }>
      { children }
    </StyledSpan>
  );
};

export default Label;
