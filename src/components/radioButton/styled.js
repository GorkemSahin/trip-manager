import styled from 'styled-components';
import { Radio } from 'react-radio-group';

export const StyledRadioButton = styled(Radio)`
  margin-right: ${({ theme }) => theme.small };
`;

export const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.darkGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  color: ${({ theme }) => theme.black };
  padding: ${({ theme }) => theme.small };
  margin-right: ${({ theme }) => theme.small };
`;
