import styled from 'styled-components';
import { ReversedRadioButton } from 'react-radio-buttons';

export const StyledRadioButton = styled(ReversedRadioButton)`
`;

export const StyledDiv = styled.div`
  & > div {
    background-color: ${({ theme }) => theme.darkGray };
    border-radius: ${({ theme }) => theme.borderRadius } !important;
    border-width: 0px !important;
    color: ${({ theme }) => theme.black } !important;
    margin-right: ${({ theme }) => theme.small } !important;
  }
  & > div > div {
    margin-right: ${({ theme }) => theme.verySmall };
  }
`;
