import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  ${(p) => p.error && `& > input, > * > input, > * > .form-control {
    border: 1px solid ${ p.theme.red };
  }` }
`;

export const StyledLabel = styled.label`
  margin-top: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.verySmall };
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) => theme.red };
  font-size: 0.75em;
  margin-bottom: ${({ theme }) => theme.verySmall };
`;
