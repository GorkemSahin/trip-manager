import React, { useState } from 'react';
import Content from './content';
import Header from './header';
import InfoSideBar from './infoSideBar';
import NavSideBar from './navSideBar';
import TriggerButton from './triggerButton';
import { InnerDiv, OuterDiv } from './styled';

// TODO title

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <OuterDiv>
      <TriggerButton onClick={ () => setSideBarOpen(!sideBarOpen) }/>
      <NavSideBar isOpen={ sideBarOpen }>

      </NavSideBar>
      <InnerDiv>
        <Header>
          <h1>Title</h1>
        </Header>
        <Content>
          { children }
        </Content>
      </InnerDiv>
      <InfoSideBar>

      </InfoSideBar>
    </OuterDiv>
  );
};

export default Layout;
