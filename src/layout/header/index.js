import React from 'react'
import { StyledDiv, StyledH1 } from './styled'
import { useTitle } from 'utils/hooks'

const Header = ({ children, ...rest }) => {
  const title = useTitle()
  return (
    <StyledDiv {...rest}>
      <StyledH1>{title}</StyledH1>
    </StyledDiv>
  )
}

export default Header
