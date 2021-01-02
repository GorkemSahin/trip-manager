import React from 'react';
import { StyledDiv } from './styled';

// TODO scroll to top on new page
const Content = ({ children, ...rest }) => {
  return (
    <StyledDiv { ...rest }>
      { children }
    </StyledDiv>
  );
};

export default Content;
