import React from 'react';
import { StyledDiv, StyledLabel, ErrorSpan } from './styled';

const Field = ({ children, label, error, ...rest }) => {
  return (
    <StyledDiv error={ error } { ...rest }>
      <StyledLabel>{ label }</StyledLabel>
      { error && <ErrorSpan>{ error.message } </ErrorSpan>}
      { children }
    </StyledDiv>
  );
};

export default Field;
