import styled from 'styled-components';

const StyledSpan = styled.label`
  margin-top: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.verySmall };
  display:inline-block;
`;

export default StyledSpan;
