import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../appState/country';
import { World } from '../../assets/icons';
import {
  StyledDiv,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
  StyledSelectorIcon,
  StyledWorld
} from './styled';

// TODO may use SWR here
const CountrySelector = ({ selected, onChange, ...rest }) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [choice, setChoice] = useState(selected);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setChoice(value);
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(actions.fetchCountries(setCountries));
  }, []);

  useEffect(() => {
    setOptions(countries ? countries.map(c => ({ label: c.label, icon: <World style={{ marginRight: '1em' }}/> })) : []);
  }, [countries]);

  return (
    <StyledDiv { ...rest }>
      <DropDownHeader isOpen = { isOpen } onClick={ toggling }>
        <StyledWorld/>
        { choice ? choice.label : 'Pick one' }
        <StyledSelectorIcon/>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option.label}>
                <StyledWorld/>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </StyledDiv>
  );
};

export default CountrySelector;
