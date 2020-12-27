import styled from 'styled-components';

// TODO overflow necessary?
export const OuterDiv = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export const InnerDiv = styled.div`
  display: ${(p) => (p.theme.isMobile && !p.isOpen) ? 'none' : 'flex' };
  flex: 9;
  flex-direction: column;
  margin: ${({ theme }) => `0 ${ theme.medium } 0 ${ theme.medium }` };
`;
