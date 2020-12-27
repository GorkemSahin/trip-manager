import React from 'react';
import { StyledRadioButton, StyledDiv } from './styled';

const RadioButton = ({ title, style, inputRef, ...rest }) => {
  return (
    <StyledDiv style={ style }>
      <StyledRadioButton type='radio' ref={ inputRef } { ...rest }/>
      <span>
        { title }
      </span>
    </StyledDiv>
  );
};

export default RadioButton;
