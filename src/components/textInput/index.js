import React from 'react';
import StyledInput from './styled';

const TextInput = ({ children, inputRef, ...rest }) => {
  return (
    <StyledInput placeholder='Type here...' ref={ inputRef } { ...rest }>
      { children }
    </StyledInput>
  );
};

export default TextInput;
