import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  ${({ theme }) => theme.lightGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  padding: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.small };
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.small };
`;

export const TitleDiv = styled(StyledDiv)`
  flex-direction: row;
  margin-bottom:${({ theme }) => theme.medium };
  align-items: center;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: space-around;
`;

export const CountrySpan = styled.h4`
  margin: 0;
  margin-right: 1em;
`;

export const LightSpan = styled.span`
  color: ${({ theme }) => theme.lightText };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: 15em;
`;
