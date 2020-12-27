import React from 'react';
import { StyledDiv } from './styled';
import { useTitle } from '../../hooks';

const Header = ({ children, ...rest }) => {
  const title = useTitle();
  return (
    <StyledDiv { ...rest }>
      <h1>{ title }</h1>
    </StyledDiv>
  );
};

export default Header;
