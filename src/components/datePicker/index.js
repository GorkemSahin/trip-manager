/* eslint-disable no-unused-vars */
import React from 'react';
import Datetime from 'react-datetime';
import './style.css';

const DatePicker = ({ onChange, ...rest }) => {
  const formattedOnChange = moment => onChange(moment.toDate());
  return (
    <Datetime
      dateFormat={ 'DD/MM/yyyy' }
      timeFormat={ false }
      closeOnSelect={ true }
      onChange={ formattedOnChange }
      { ...rest }/>
  );
};

export default DatePicker;
