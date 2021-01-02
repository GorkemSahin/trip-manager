import React, { useEffect, useMemo, useState } from 'react';
import { getFlag, World } from '../../assets/icons';
import SelectWithIcon from '../../components/selectWithIcon';
import { useCountries } from '../../hooks';

const CountrySelector = ({ ...rest }) => {
  const { countries, error } = useCountries();
  const [placeholder, setPlaceholder] = useState('Loading...');

  const options = useMemo(() => (countries
    ? countries.sort((c1, c2) => c1.label.localeCompare(c2.label)).map(c => {
        const Flag = getFlag(c.value);
        return { icon: <Flag/>, ...c };
      })
    : []), [countries]);

  useEffect(() => setPlaceholder(options.length > 0 ? 'Select a country' : error ? 'Error' : 'Loading...'),
    [options, error]);

  return (
    <SelectWithIcon
      defaultIcon = { <World/> }
      options = { options }
      placeholder = { placeholder }
      { ...rest }/>
  );
};

export default CountrySelector;
