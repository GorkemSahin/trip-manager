import styled from 'styled-components';
import { SelectorIcon } from '../../assets/icons';

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  position:relative;
  flex-direction: column;
`;

export const DropDownHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color:  ${({ theme }) => theme.white };
  border: 1px solid ${({ theme }) => theme.darkGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  padding-left: ${({ theme }) => theme.small };
  height: ${({ theme }) => theme.inputHeight };
  ${({ isOpen }) => isOpen ? 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;' : '' };
  margin-bottom: ${({ theme }) => theme.small };
  width: 100%;
`;

// TODO fix right side overflow
export const DropDownListContainer = styled.div`
  display: flex;
  position: absolute;
  overflow: hidden;
  top: ${({ theme }) => theme.inputHeight };
  flex-direction: column;
  width: 100%;
  z-index: 50;
  border: 1px solid ${({ theme }) => theme.darkGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color:  ${({ theme }) => theme.white };
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-height: 14em;
  overflow: scroll;
  border-radius: ${({ theme }) => theme.borderRadius };
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-left: ${({ theme }) => theme.small };
  border-bottom: 1px solid ${({ theme }) => theme.darkGray };
  height: ${({ theme }) => theme.inputHeight };
  align-items: center;
`;

export const StyledSelectorIcon = styled(SelectorIcon)`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.small };
`;

export const IconDiv = styled.div`
  margin-right: ${({ theme }) => theme.small };
`;
