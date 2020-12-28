import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../appState/country';
import { World } from '../../assets/icons';
import SelectWithIcon from '../../components/selectWithIcon';

// TODO may use SWR here, Redux Saga seems like an overkill
const CountrySelector = ({ ...rest }) => {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    dispatch(actions.fetchCountries(setCountries));
  }, []);

  const options = useMemo(() => countries.sort((c1, c2) => c1.label.localeCompare(c2.label)).map(c => ({
    icon: <World/>, ...c
  }), [countries]));

  return (
    <SelectWithIcon
      defaultIcon = { <World/> }
      options = { options }
      { ...rest }/>
  );
};

export default CountrySelector;
