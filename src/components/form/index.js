import React from 'react';
import StyledForm from './styled';

const Form = ({ children, ...rest }) => {
  return (
    <StyledForm { ...rest }>
      { children }
    </StyledForm>
  );
};

export default Form;
