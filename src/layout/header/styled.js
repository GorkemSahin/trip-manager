import styled from 'styled-components';

export const OuterDiv = styled.div`
  height: ${({ theme }) => theme.length.rowHeight };
  width: 100%;
  display: flex;
  ${({ theme: { isMobile } }) => isMobile ? 'justify-content: center;' : '' };
  background-color: ${({ theme: { color } }) => color.white };
  border-bottom: 2px solid ${({ theme: { color } }) => color.divider };
`;
