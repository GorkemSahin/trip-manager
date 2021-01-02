import React from 'react';
import { StyledButton } from './styled';
import { Cross, Hamburger } from '../../assets/icons';

// TODO animate button
const MenuButton = ({ sideBarOpen, ...rest }) => {
  return (
    <StyledButton icon={ sideBarOpen ? <Cross/> : <Hamburger/> } {...rest}/>
  );
};

export default MenuButton;
