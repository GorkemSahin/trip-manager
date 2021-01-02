import styled from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => `
      display: flex;
      background-color: ${ theme.lightGray };
      border-radius: ${ theme.borderRadius };
      margin-top: ${ theme.small };
      padding: ${ theme.small };
  `}
`;

export default StyledDiv;
