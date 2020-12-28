import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  background-color:  ${({ theme }) => theme.lightGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  height: ${({ theme }) => theme.horizontalTripHeight };
  padding: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.small };
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
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
`;
