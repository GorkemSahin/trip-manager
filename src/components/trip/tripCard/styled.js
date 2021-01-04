import styled from 'styled-components';
import Container from '../../container';

export const OuterDiv = styled(Container)`
  flex-direction: column;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.small };
  padding: ${({ theme }) => theme.small };
  & > * > strong, span {
    margin-bottom: 0.25em;
  }
  height: 20em;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.small };
`;

export const TitleDiv = styled(Section)`
  flex-direction: row;
  margin-bottom:${({ theme }) => theme.small };
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
  font-size: 1.5em;
  font-weight: 600;
`;

export const Address = styled.span`
  color: ${({ theme }) => theme.lightText };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const LightSpan = styled.span`
  color: ${({ theme }) => theme.lightText };
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Company = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;
