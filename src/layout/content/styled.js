import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white };
  padding-left: ${({ theme }) => theme.large };
  padding-right: ${({ theme }) => theme.large };
  overflow: scroll;
`;
