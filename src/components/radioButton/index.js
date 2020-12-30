import React from 'react';
import { StyledDiv, StyledRadioButton } from './styled';

const RadioButton = ({ label, ...rest }) => {
  return (
    <StyledDiv>
      <StyledRadioButton { ...rest }/>
      { label }
    </StyledDiv>
  );
};

export default RadioButton;
