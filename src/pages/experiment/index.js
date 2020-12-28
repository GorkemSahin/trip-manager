/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Edit, World } from '../../assets/icons';
import SelectWithIcon from '../../components/selectWithIcon';

const options = [
  {
    icon: <World/>,
    value: 'aw',
    label: 'Netherlands'
  },
  {
    value: 'gr',
    label: 'Greece'
  },
  {
    value: 'fr',
    label: 'France'
  },
  {
    icon: <World/>,
    value: 'pt',
    label: 'Portugal'
  },
  {
    value: 'es',
    label: 'Spain'
  },
  {
    value: 'it',
    label: 'Italy'
  },
  {
    icon: <World/>,
    value: 'sk',
    label: 'Slovakia'
  },
  {
    value: 'se',
    label: 'Sweden'
  },
  {
    value: 'cn',
    label: 'China'
  },
  {
    value: 'at',
    label: 'Austria'
  },
  {
    icon: <World/>,
    value: 'uk',
    label: 'United Kingdom'
  }
];

const Experiment = () => {
  const [country, setCountry] = useState();
  console.log(country);
  return (
    <SelectWithIcon selected={ country } onChange={ setCountry } options={ options } defaultIcon={ <Edit/> }/>
  );
};

export default Experiment;
