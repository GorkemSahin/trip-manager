import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  ${({ theme }) => `
      background-color: ${ theme.lightGray };
      border-radius: ${ theme.borderRadius };
      margin-top: ${ theme.small };
      padding: ${ theme.small };
  `}
`;

export default StyledDiv;
