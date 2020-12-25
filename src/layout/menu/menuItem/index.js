import React from 'react';
import { StyledLink, StyledSpan } from './styled';

const MenuItem = ({ item, ...rest }) => {
  return (
    <StyledLink
      key={ item.title }
      to={ item.to }
      disabled = { item.disabled }
      { ...rest }>
        { item.icon }
        <StyledSpan>
          { item.title }
        </StyledSpan>
    </StyledLink>
  );
};

export default MenuItem;
