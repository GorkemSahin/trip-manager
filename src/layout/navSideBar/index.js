import React from 'react';
import { Logo } from '../../assets/icons';
import { InnerDiv, OuterDiv } from './styled';

const NavSideBar = ({ children, ...rest }) => {
  return (
    <OuterDiv { ...rest }>
      <InnerDiv>
        <Logo style={{ alignSelf: 'center' }}/>
        <h4>Some Link</h4>
        <h4>Some Link</h4>
        <h4>Some Link</h4>
      </InnerDiv>
    </OuterDiv>
  );
};

export default NavSideBar;
