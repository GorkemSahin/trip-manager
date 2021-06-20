import React from 'react'
import MenuItem from './menuItem'
import { StyledDiv } from './styled'

const Menu = ({ items, ...rest }) => {
  return (
    <StyledDiv {...rest}>
      {items.map((item) => (
        <MenuItem item={item} key={item.title} />
      ))}
    </StyledDiv>
  )
}

export default Menu
