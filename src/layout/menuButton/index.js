import React from 'react';
import { StyledButton } from './styled';
import { Hamburger } from '../../assets/icons';

// TODO animate button
const MenuButton = ({ children, ...rest }) => {
  return (
    <StyledButton icon={ <Hamburger/> } {...rest}/>
  );
};

export default MenuButton;
