import styled from 'styled-components';
import Button from '../../components/button';

export const StyledButton = styled(Button)`
  display: ${({ theme: { isMobile } }) => isMobile ? 'flex' : 'none' };
  position: fixed;
  top: 2em;
  left: 2em;
  z-index: 99;
`;
