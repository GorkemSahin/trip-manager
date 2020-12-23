import React from 'react';
import { OuterDiv } from './styled';

const Content = ({ children, ...rest }) => {
  return (
    <OuterDiv { ...rest }>
      { children }
    </OuterDiv>
  );
};

export default Content;
