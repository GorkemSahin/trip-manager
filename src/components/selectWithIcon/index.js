import React, { useState, useRef, useEffect } from 'react';
import { useOuterClick } from 'react-outer-click';
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
  const [choice, setChoice] = useState();

  useEffect(() => setChoice(options.find(o => o.value === value)), [value]);

  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = option => () => {
    setChoice(option);
    onChange(option.value);
    setIsOpen(false);
  };

  const ref = useRef();
  useOuterClick(ref, () => setIsOpen(false));

  // TODO ((choice && choice.icon) || defaultIcon) && <IconDiv> why doesn't it work?

  return (
    <StyledDiv ref={ref} { ...rest }>
      <DropDownHeader className='form-control' isOpen = { isOpen } onClick={ toggle }>
        {
          ((choice) || defaultIcon) && <IconDiv>
            { choice ? choice.icon : defaultIcon }
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
