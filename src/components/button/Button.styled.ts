import styled from 'styled-components'

export const SButton = styled.button`
  padding: 1rem 1.5rem;
  & > svg {
    width: 1rem;
    height: 1rem;
  }
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`
