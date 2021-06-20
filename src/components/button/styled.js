import styled from 'styled-components'

export const ButtonWithIcon = styled.button`
  width: ${({ theme }) => theme.buttonWidth};
  justify-content: space-between;
`

export const IconButton = styled.button`
  width: ${({ theme }) => theme.buttonHeight};
`

export const StyledText = styled.span`
  display: block;
  outline: none;
  background-color: transparent;
`
