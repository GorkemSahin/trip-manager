import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: ${({ hide }) => hide ? 'none' : 'flex' };
  flex: 3;
  padding: ${({ theme }) => theme.medium };
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  border-left: 2px solid ${({ theme }) => theme.divider };
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const InnerDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 100%;
  height: fit-content;
`;
