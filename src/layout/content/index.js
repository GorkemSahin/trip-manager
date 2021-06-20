import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledDiv, ScrollToTop } from './styled'

const Content = ({ children, ...rest }) => {
  // Scroll to top when navigated to a new trip
  const { key } = useLocation()
  const ref = useRef()
  useEffect(() => {
    ref.current.scrollIntoView()
  }, [key])

  return (
    <StyledDiv {...rest}>
      <ScrollToTop ref={ref} />
      {children}
    </StyledDiv>
  )
}

export default Content
