import styled from 'styled-components';

const StyledInput = styled.input`
  background-color:  ${({ theme }) => theme.white };
  border-radius: ${({ theme }) => theme.borderRadius };
  height: ${({ theme }) => theme.inputHeight };
  outline: none;
  padding-left: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.small };
  border: 1px solid ${({ theme }) => theme.darkGray };
`;

export default StyledInput;
