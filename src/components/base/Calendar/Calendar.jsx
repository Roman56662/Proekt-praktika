import React, { useCallback, useState } from 'react';
import {Calendar} from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const CalendarComponent = ({getDayArrived, getDayDeparted, getMonthArrived, getMonthDeparted}) => {

  const [dateArrived, setDateArrived] = useState(new Date())
  const [dateDeparted, setDateDeparted] = useState(new Date())

  let today

  const onChangeArrived = useCallback( (dateArrived) => {
    setDateArrived(dateArrived);
    today = dateArrived.getDate()
    getDayArrived(dateArrived.getDate(dateArrived.setDate(today)))
    getMonthArrived(dateArrived.getMonth())
  },[dateArrived]) 

  const onChangeDeparted = useCallback( (dateDeparted) => {
    setDateDeparted(dateDeparted);
    today = dateDeparted.getDate()
    getDayDeparted(dateDeparted.getDate(dateDeparted.setDate(today)))
    getMonthDeparted(dateDeparted.getMonth())
  },[dateDeparted])   
  
  return (
      <div className={cx('calendar')}>
        <Calendar className={cx('calendar-double calendar__departed')}  minDate={new Date()} maxDate={new Date(2022, 0, 1, 0, 0, 0, 0)} onChange={onChangeArrived} value={dateArrived} />
        <Calendar className={cx('calendar-double calendar__arrived')}  minDate={new Date(dateArrived)} maxDate={new Date(2022, 0, 1, 0, 0, 0, 0)} onChange={onChangeDeparted} value={dateDeparted} />
        
      </div>
  );
}

