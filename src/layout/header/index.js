import React from 'react';
import { OuterDiv } from './styled';

const Header = ({ children, ...rest }) => {
  return (
    <OuterDiv { ...rest }>
      { children }
    </OuterDiv>
  );
};

export default Header;
