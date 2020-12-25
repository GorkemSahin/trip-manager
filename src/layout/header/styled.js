import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: ${({ theme }) => theme.rowHeight };
  width: 100%;
  display: flex;
  ${({ theme: { isMobile } }) => isMobile ? 'justify-content: center' : '' };
  background-color: ${({ theme }) => theme.white };
  border-bottom: 2px solid ${({ theme }) => theme.divider };
`;
