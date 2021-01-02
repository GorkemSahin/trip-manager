import styled from 'styled-components';

const StyledDiv = styled.div`
  ${({ theme }) => `
      display: flex;
      background-color: ${ theme.lightGray };
      border-radius: ${ theme.borderRadius };
      margin-top: ${ theme.small };
      padding: 0 ${ theme.small } 0 ${ theme.small };
  `}
`;

export default StyledDiv;
