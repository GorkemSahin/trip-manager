import styled from 'styled-components';
import { World, SelectorIcon } from '../../assets/icons';

export const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  position:relative;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.small };
`;

// TODO fix radius while open
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
`;

export const DropDownListContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  z-index: 100;
  border: 1px solid ${({ theme }) => theme.darkGray };
  border-radius: ${({ theme }) => theme.borderRadius };
  background-color:  ${({ theme }) => theme.white };
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 15em;
  overflow: scroll;
  border-radius: ${({ theme }) => theme.borderRadius };
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: ${({ theme }) => theme.small };
  border-bottom: 1px solid ${({ theme }) => theme.darkGray };
  height: ${({ theme }) => theme.inputHeight };
  align-items: center;
`;

export const StyledWorld = styled(World)`
  margin-right: ${({ theme }) => theme.small };;
`;

export const StyledSelectorIcon = styled(SelectorIcon)`
  margin-left: auto;
  margin-right: ${({ theme }) => theme.small };;
`;
