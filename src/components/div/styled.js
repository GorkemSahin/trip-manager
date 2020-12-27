import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(p) => p.dark ? p.theme.darkGray : p.theme.gray };
  border-radius: ${({ theme }) => theme.borderRadius };
  margin-bottom: ${({ theme }) => theme.small };
  padding: 0 ${({ theme }) => theme.small } 0 ${({ theme }) => theme.small };
`;
