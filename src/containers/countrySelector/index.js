import React, { useEffect, useMemo, useState } from 'react';
import { World } from '../../assets/icons';
import SelectWithIcon from '../../components/selectWithIcon';
import { useCountries } from '../../hooks';

// TODO why loading doesn't update?
const CountrySelector = ({ ...rest }) => {
  const { countries, error } = useCountries();
  const [placeholder, setPlaceholder] = useState('Loading...');

  const options = useMemo(() => (countries
    ? countries.sort((c1, c2) => c1.label.localeCompare(c2.label)).map(c => ({ icon: <World/>, ...c }))
    : []), [countries]);

  // TODO think about shortening it
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
