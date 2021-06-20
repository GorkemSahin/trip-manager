import styled from 'styled-components'

export const OuterDiv = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

export const InnerDiv = styled.div`
  display: ${(p) => (p.theme.isMobile && !p.isOpen ? 'none' : 'flex')};
  flex: 9;
  flex-direction: column;
  overflow: hidden;
`
