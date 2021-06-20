import React, { useState, useEffect } from 'react'
import Content from './content'
import Header from './header'
import InfoSideBar from './infoSideBar'
import NavSideBar from './navSideBar'
import MenuButton from './menuButton'
import { InnerDiv, OuterDiv } from './styled'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  // Navigation sidebar will be closed when user navigates
  const { key } = useLocation()
  useEffect(() => setSideBarOpen(false), [key])

  return (
    <OuterDiv>
      <MenuButton
        sideBarOpen={sideBarOpen}
        onClick={() => setSideBarOpen(!sideBarOpen)}
      />
      <NavSideBar isOpen={sideBarOpen} />
      <InnerDiv isOpen={!sideBarOpen}>
        <Header />
        <Content>{children}</Content>
      </InnerDiv>
      <InfoSideBar />
    </OuterDiv>
  )
}

export default Layout
