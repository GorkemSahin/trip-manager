import React, { useState } from 'react';
import {
  StyledDiv,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  StyledSelectorIcon,
  StyledWorld
} from './styled';

const options = ['Here', 'There', 'Place', 'Country'];

const Select = ({ selected, onChange, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState(selected);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setChoice(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <StyledDiv { ...rest }>
      <DropDownHeader isOpen = { isOpen } onClick={ toggling }>
        <StyledWorld/>
        { choice || 'Pick one' }
        <StyledSelectorIcon/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                <StyledWorld/>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </StyledDiv>
  );
};

export default Select;
