import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex: 0;
  height: ${({ theme }) => theme.inputHeight };
  align-items: center;
  background-color: ${({ theme }) => theme.darkGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  &:focus {
    outline: none;
  }
  ${(p) => p.disabled ? `opacity: ${({ theme }) => theme.moreTransparency }` : '' };
  padding: 0.5em 1em 0.5em 1em;
  margin-bottom: ${({ theme }) => theme.small };
  margin-right: ${({ theme }) => theme.small };
`;

export const StyledRadioButton = styled.input`
  margin-right: ${({ theme }) => theme.small };
  background-color: red;
`;
