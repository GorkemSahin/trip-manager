import React, { useState, useEffect } from 'react';
import Content from './content';
import Header from './header';
import InfoSideBar from './infoSideBar';
import NavSideBar from './navSideBar';
import MenuButton from './menuButton';
import { InnerDiv, OuterDiv } from './styled';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // Navigation sidebar will be closed when user navigates
  useEffect(() => setSideBarOpen(false), [useLocation().key]);

  return (
    <OuterDiv>
      <MenuButton onClick={ () => setSideBarOpen(!sideBarOpen) }/>
      <NavSideBar isOpen={ sideBarOpen }/>
      <InnerDiv isOpen={ !sideBarOpen }>
        <Header/>
        <Content>
          { children }
        </Content>
      </InnerDiv>
      <InfoSideBar/>
    </OuterDiv>
  );
};

export default Layout;
