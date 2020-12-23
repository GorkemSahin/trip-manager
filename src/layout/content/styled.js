import styled from 'styled-components';

export const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${({ theme: { color } }) => color.white };
`;
