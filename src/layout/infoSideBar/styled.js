import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: ${({ theme: { isMobile } }) => isMobile ? 'none' : 'flex' };
  flex: 3;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightGray };
  padding: ${({ theme }) => theme.medium };
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
`;
