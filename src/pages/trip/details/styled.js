import styled from 'styled-components';
import Form from '../../../components/form';

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 30em;
  margin: ${({ theme }) => theme.medium };;
  align-self: center;
  align-items: center;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
