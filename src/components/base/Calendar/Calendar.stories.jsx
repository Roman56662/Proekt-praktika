import React, { useState, useCallback } from 'react';
import { CalendarComponent } from './Calendar';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'CalendarComponent',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const CalendarComponentData = () => {
  const [dayArrived, setDayArrived] = useState()
  const [monthArrived, setMonthArrived] = useState()

  const [dayDeparted, setDayDeparted] = useState()
  const [monthDeparted, setMonthDeparted] = useState()

  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 

  const getDayArrived = useCallback( (value) => {
    setDayArrived(value);
  })

  const getDayDeparted = useCallback( (value) => {
    setDayDeparted(value);
  })

  const getMonthArrived = useCallback( (value) => {
    setMonthArrived(monthArr[value]);
  })

  const getMonthDeparted = useCallback( (value) => {
    setMonthDeparted(monthArr[value]);
  })

  return (
    <div>
    <CalendarComponent getDayArrived={getDayArrived} getDayDeparted={getDayDeparted} getMonthArrived={getMonthArrived} getMonthDeparted={getMonthDeparted} />
    <p>{dayArrived + ' ' + monthArrived }</p>
    </div>
  );
};

export const example = () => <CalendarComponentData/>