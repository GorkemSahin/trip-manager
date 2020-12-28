import React, { useState } from 'react';
import { StyledDatePicker } from './styled';

// TODO Is onchange neccessary here?
const DatePicker = ({ ...rest }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyledDatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      { ...rest }/>
  );
};

export default DatePicker;
