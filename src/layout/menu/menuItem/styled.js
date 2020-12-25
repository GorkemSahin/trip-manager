import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.black };
  margin-bottom: ${({ theme }) => theme.small };
  opacity: ${(p) => p.disabled ? p.theme.moreTransparency : p.theme.lessTransparency };
  ${(p) => p.disabled ? 'pointer-events: none' : '' };
  &:hover {
    ${(p) => !p.disabled ? 'opacity: 1' : '' };
  }
  text-decoration: 'none';
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export const StyledSpan = styled.span`
  margin-left: 0.5em;
`;
