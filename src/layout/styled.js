import styled from 'styled-components';

// TODO extract common attributes
export const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: ${({ theme: { length } }) => `0 ${ length.medium } 0 ${ length.medium }` };
`;
