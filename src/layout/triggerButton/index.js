import React from 'react';
import { StyledButton } from './styled';
import { Cross } from '../../assets/icons';

// TODO dynamic icon
const TriggerButton = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <Cross/>
    </StyledButton>
  );
};

export default TriggerButton;
