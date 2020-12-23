import styled from 'styled-components';

export const OuterDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: ${({ theme: { length } }) => length.infoSideBarWidth };
  display: ${({ theme: { isMobile } }) => isMobile ? 'none' : 'flex' };
  background-color: ${({ theme: { color } }) => color.veryLightGray };
  padding: ${({ theme: { length } }) => length.medium };
`;
