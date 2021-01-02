import styled from 'styled-components';
import Container from '../container';

export const OuterDiv = styled(Container)`
  height: ${({ theme }) => theme.horizontalTripHeight };
  margin-bottom: ${({ theme }) => theme.small };
  padding: ${({ theme }) => theme.small };
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
  overflow: hidden;
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
  margin-left: ${({ theme }) => theme.small };
  justify-content: space-around;
  min-width: 7em;
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
  max-width: 100%;
`;
