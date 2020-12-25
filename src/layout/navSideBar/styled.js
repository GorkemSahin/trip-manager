import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: ${(p) => (p.theme.isMobile && !p.isOpen) ? 'none' : 'flex'};
  flex: 2;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGray };
  padding: ${({ theme }) => theme.medium };
`;
