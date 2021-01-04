import styled from 'styled-components';
import { Radio } from 'react-radio-group';

export const StyledRadioButton = styled(Radio)`
  margin-right: ${({ theme }) => theme.small };
`;

export const StyledDiv = styled.div`
  ${({ theme }) => `
    background-color: ${ theme.darkGray };
    border-radius: ${ theme.borderRadius };
    color: ${ theme.black };
    margin-right: ${ theme.small };
    padding: ${ theme.small };
  `}
`;
