import styled from 'styled-components';

export const StyledDiv = styled.div`
  height: ${({ theme }) => theme.rowHeight };
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  display: flex;
  ${({ theme: { isMobile } }) => isMobile ? 'justify-content: center' : '' };
  background-color: ${({ theme }) => theme.white };
  border-bottom: 2px solid ${({ theme }) => theme.divider };
`;

export const StyledH1 = styled.h1`
  ${({ theme }) => !theme.isMobile && `margin-left: ${ theme.small }` };
`;
