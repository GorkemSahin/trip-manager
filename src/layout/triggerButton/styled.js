import styled from 'styled-components';

export const StyledButton = styled.button`
  display: ${({ theme: { isMobile } }) => isMobile ? 'inLine' : 'none' };
  background-color: white;
  height: ${({ theme }) => theme.length.large };
  width: ${({ theme }) => theme.length.large };
  position: fixed;
  top: 0;
  left: 0;
  margin: ${({ theme }) => theme.length.medium };
  z-index: 99;
  border-radius: ${({ theme }) => theme.borderRadius };
`;
