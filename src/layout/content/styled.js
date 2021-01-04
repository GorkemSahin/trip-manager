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

export const ScrollToTop = styled.div`
  visibility: hidden;
  width: 0px;
  height: 0px;
`;
