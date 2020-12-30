import styled from 'styled-components';

const getColor = ({ primary, danger, disabled, theme }, hovered) => {
  return primary ? ((hovered && !disabled) ? theme.darkOrange : theme.orange) : danger ? theme.lightRed : theme.darkGray;
};

export const BaseButton = styled.button`
  display: flex;
  height: ${({ theme }) => theme.buttonHeight };
  align-items: center;
  border: none;
  background-color: ${(p) => getColor(p) };
  border-radius: ${({ theme }) => theme.borderRadius };
  &:hover {
    background-color: ${(p) => getColor(p, true) };
  }
  &:focus {
    outline: none;
  }
  ${(p) => p.disabled ? `opacity: ${({ theme }) => theme.moreTransparency }` : '' };
  padding: ${({ theme }) => theme.small };
`;

export const ButtonWithIcon = styled(BaseButton)`
  width: ${({ theme }) => theme.buttonWidth };
  justify-content: space-between;
`;

export const IconButton = styled(BaseButton)`
  width: ${({ theme }) => theme.buttonHeight };
  justify-content: center;
`;

export const StyledText = styled.span`
  display: block;
  outline: none;
  background-color: transparent;
  color: ${(p) => p.primary ? p.theme.black : p.theme.veryDarkGray };
  ${ BaseButton }:hover & {
    ${(p) => p.disabled ? '' : `color: ${ p.theme.black }` };
  }
`;
