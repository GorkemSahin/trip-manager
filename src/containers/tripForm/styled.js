import styled from 'styled-components';
import Form from '../../components/form';
import { RadioGroup } from 'react-radio-group';
import Container from '../../components/container';

export const StyledForm = styled(Form)`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 30em;
  margin: ${({ theme }) => theme.medium } 0;
  align-self: center;
  align-items: center;
`;

export const FieldSet = styled.fieldset`
  flex-direction: column;
  width: 100%;
  ${({ theme }) => `
    background-color: ${ theme.lightGray };
    border-radius: ${ theme.borderRadius };
    margin-bottom: ${ theme.small };
    padding: 0 ${ theme.small };
  `}
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
`;

export const CovidDiv = styled(Container)`
  border-top: 1px solid #E4E4E5;
  align-self: center;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding: 0;
  margin-top: 0;
`;

export const ErrorSpan = styled.span`
  margin-bottom: ${({ theme }) => theme.small };
  color: ${({ theme }) => theme.red };
`;
