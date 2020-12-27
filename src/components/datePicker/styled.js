import styled from 'styled-components';
import DatePicker from 'react-datepicker-styled-components';

export const StyledDatePicker = styled(DatePicker)`
  background-color:  ${({ theme }) => theme.white };
  border-radius: ${({ theme }) => theme.borderRadius };
  height: ${({ theme }) => theme.inputHeight };
  outline: none;
  padding-left: ${({ theme }) => theme.small };
  margin-bottom: ${({ theme }) => theme.small };
  border: 1px solid ${({ theme }) => theme.darkGray };
  width: 100%;
  .react-datepicker-wrapper & {
    width: 100%;
  }
`;

/* TODO width and text
.react-datepicker__input-container {
  width: inherit;
}

.react-datepicker-wrapper {
  width: 100%;
} */
