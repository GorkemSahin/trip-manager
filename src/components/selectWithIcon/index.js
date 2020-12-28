import React, { useState } from 'react';
import {
  StyledDiv,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  StyledSelectorIcon,
  IconDiv
} from './styled';

const SelectWithIcon = ({ options, value, onChange, defaultIcon, placeholder, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const blank = { value: null, label: placeholder || 'Select' };
  const [choice, setChoice] = useState(value ? options.find(o => o.value === value) : blank);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = option => () => {
    setChoice(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <StyledDiv { ...rest }>
      <DropDownHeader isOpen = { isOpen } onClick={ toggling }>
        {
          (choice.icon || defaultIcon) && <IconDiv>
            { choice.icon || defaultIcon }
          </IconDiv>
        }
        { choice ? choice.label : placeholder }
        <StyledSelectorIcon/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            { options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={ option.value }>
                {
                  (option.icon || defaultIcon) && <IconDiv>
                    { option.icon || defaultIcon }
                  </IconDiv>
                }
                { option.label }
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </StyledDiv>
  );
};

export default SelectWithIcon;
