import styled from 'styled-components'

export const StyledDiv = styled.div`
  height: ${({ theme }) => theme.rowHeight};
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  display: flex;
  align-items: center;
  ${({ theme: { isMobile } }) => (isMobile ? 'justify-content: center' : '')};
  background-color: ${({ theme }) => theme.white};
  border-bottom: 2px solid ${({ theme }) => theme.divider};
`

export const StyledH1 = styled.h1`
  font-weight: 400;
  font-size: 1.5em;
  ${({ theme }) =>
    `${theme.isMobile ? 'margin-top:' : 'margin:'}  ${theme.small}`}
`
