import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: ${(p) => (p.theme.isMobile && !p.isOpen) ? 'none' : 'flex'};
  flex: 2;
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGray };
  padding: ${({ theme }) => theme.medium };
`;
