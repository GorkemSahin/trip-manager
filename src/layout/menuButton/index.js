import React from 'react'
import { StyledButton } from './styled'

const MenuButton = ({ sideBarOpen, ...rest }) => {
  return <StyledButton {...rest} />
}

export default MenuButton
