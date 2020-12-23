import styled from 'styled-components';

export const OuterDiv = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.isMobile ? '100vw' : theme.length.navSideBarWidth };
  ${({ theme: { isMobile } }) => isMobile ? 'position: fixed' : '' };
  display: ${(props) => props.theme.isMobile ? (props.isOpen ? 'flex' : 'none') : 'flex' };
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.veryLightGray };
`;

export const InnerDiv = styled.div`
  flex: 1;
  flex-direction: column;
  padding: ${({ theme }) => theme.length.medium };
`;
