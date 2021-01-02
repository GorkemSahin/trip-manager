import styled from 'styled-components';
import Container from '../container';

export const OuterDiv = styled(Container)`
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.small };
  padding: ${({ theme }) => theme.small };
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.small };
`;

export const TitleDiv = styled(Section)`
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

export const CountryH2 = styled.h2`
  margin: 0;
`;

export const LightSpan = styled.span`
  color: ${({ theme }) => theme.lightText };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
