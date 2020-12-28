/* eslint-disable no-unused-vars */
import React from 'react';
import Datetime from 'react-datetime';
import './style.css';

const DatePicker = ({ ...rest }) => {
  return (
    <Datetime
      dateFormat={ 'yyyy/MM/DD' }
      timeFormat={ false }
      closeOnSelect={ true }
      { ...rest }/>
  );
};

export default DatePicker;
