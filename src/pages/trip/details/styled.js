import styled from 'styled-components';
import Form from '../../../components/form';

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 30em;
  margin: ${({ theme }) => theme.medium };;
  align-self: center;
  align-items: center;
`;

export const FieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(p) => p.dark ? p.theme.darkGray : p.theme.gray };
  border-radius: ${({ theme }) => theme.borderRadius };
  margin-bottom: ${({ theme }) => theme.small };
  padding: 0 ${({ theme }) => theme.small } 0 ${({ theme }) => theme.small };
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CovidDiv = styled(FieldDiv)`
  border-top: 1px solid #E4E4E5;
  align-self: center;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;
