import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocalizer from "react-widgets-moment"
import 'react-widgets/dist/css/react-widgets.css'

momentLocalizer(moment)

const renderDateTimePicker = ({
  input: {
    onChange,
    value
  },
  showTime
}) => <DateTimePicker
  onChange={onChange}
  format="DD MMM YYYY"
  time={showTime}
  value={!value
  ? null
  : new Date(value)}/>

export default renderDateTimePicker