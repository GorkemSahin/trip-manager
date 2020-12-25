import React from 'react';
import { ButtonWithIcon, IconButton, StyledText } from './styled';

const Button = ({ text, icon, style, ...rest }) => {
  const StyledButton = text ? ButtonWithIcon : IconButton;
  return (
    <StyledButton style= { style } {...rest}>
      <StyledText { ...rest }>
        { text }
      </StyledText>
      { icon }
    </StyledButton>
  );
};

export default Button;
