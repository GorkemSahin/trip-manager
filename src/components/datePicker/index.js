import React from 'react'
import Datetime from 'react-datetime'
import './style.css'

/*
  NOTE
  The most popular datepicker component, react-datepicker, would require more customization to look
  like the one on the assignment paper, so I decided to start off with a component that already looked similar.
*/

const DatePicker = ({ onChange, ...rest }) => {
  const formattedOnChange = (moment) => onChange(moment.toDate())
  return (
    <Datetime
      inputProps={{ readOnly: true, placeholder: 'dd/mm/yyyy' }}
      dateFormat={'DD/MM/yyyy'}
      timeFormat={false}
      closeOnSelect={true}
      onChange={formattedOnChange}
      {...rest}
    />
  )
}

export default DatePicker
