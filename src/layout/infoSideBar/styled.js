import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'flex' };
  flex: 3;
  padding: 0 ${({ theme }) => theme.medium } 0 ${({ theme }) => theme.medium };
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  border-left: 2px solid ${({ theme }) => theme.divider };
  overflow: scroll;
`;

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
