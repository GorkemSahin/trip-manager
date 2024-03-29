import styled from 'styled-components'
import { Button } from '../../components/button/Button'

export const StyledButton = styled(Button)`
  display: ${({ theme: { isMobile } }) => (isMobile ? 'flex' : 'none')};
  position: fixed;
  top: 1em;
  left: 1em;
  z-index: 100;
`
