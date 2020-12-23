import React from 'react';
import { OuterDiv } from './styled';

const InfoSideBar = ({ children }) => {
  return (
    <OuterDiv>
      <h3>Title</h3>
      <span>Some text</span>
    </OuterDiv>
  );
};

export default InfoSideBar;
