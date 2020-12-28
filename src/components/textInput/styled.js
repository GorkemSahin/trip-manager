import styled from 'styled-components';

const StyledInput = styled.input`
  background-color:  ${({ theme }) => theme.white };
  border-radius: ${({ theme }) => theme.borderRadius };
  height: ${({ theme }) => theme.inputHeight };
  outline: none;
  padding-left: ${({ theme }) => theme.small };
  border: 1px solid ${({ theme }) => theme.darkGray };
  margin-bottom: ${({ theme }) => theme.small };
`;

export default StyledInput;
