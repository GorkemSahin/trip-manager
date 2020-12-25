import styled from 'styled-components';

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.small } 0 ${({ theme }) => theme.small } 0;
`;
