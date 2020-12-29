import React from 'react';
import { StyledDiv, StyledRadioButton } from './styled';
import theme from '../../constants/theme';

const RadioButton = ({ label, ...rest }) => {
  return (
    <StyledDiv>
      <StyledRadioButton
        pointColor={ theme.black }
        { ...rest }>
        { label }
    </StyledRadioButton>
    </StyledDiv>
  );
};

export default RadioButton;
