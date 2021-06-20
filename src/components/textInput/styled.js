import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: ${({ theme }) => theme.inputHeight};
  padding-left: ${({ theme }) => theme.small};
  margin-bottom: ${({ theme }) => theme.small};
`

export default StyledInput
