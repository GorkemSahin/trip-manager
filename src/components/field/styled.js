import styled from 'styled-components'
import { FieldSet } from '../../containers/tripForm/styled'

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${(p) =>
    p.error &&
    `& > input, > * > input, > * > .form-control {
    border: 1px solid ${p.theme.red};
  }`}
  ${FieldSet}:disabled & {
    & > input,
    > * > input,
    > * > .form-control {
      background-color: ${({ theme }) => theme.darkGray};
      pointer-events: none;
    }
  }
`

export const StyledLabel = styled.label`
  margin-top: ${({ theme }) => theme.small};
  margin-bottom: ${({ theme }) => theme.verySmall};
`

export const ErrorSpan = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 0.75em;
  margin-bottom: ${({ theme }) => theme.verySmall};
`
