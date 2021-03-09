import React, { useState } from 'react';
import {Calendar} from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [check, setCheck] = useState(false);

  const [day, setDay] = useState('')
  const [firstDay, setFirst] = useState('')
  const [lastDay, setLast] = useState('')
  const [firstMonth, setFirstMonth] = useState('')
  const [lastMonth, setLastMonth] = useState('')
  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
              'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']  

  let today

  const onChange = date => {
    setDate(date);
      if (check === false) {
        today = date.getDate()
        setDay(date.getDate(date.setDate(today)))
        
      } else {
        today = date.getDate()
        setFirst(date.getDate(date.setDate(today-3))) 
        setFirstMonth(monthArr[date.getMonth()])

        setLast(date.getDate(date.setDate(today+3)))
        
        setLastMonth(monthArr[date.getMonth()])

        setDay(date.getDate(date.setDate(today)))
      }

  }


  return (
    
    <div className={cx('calendar__drop-body')} >
      <div className={cx('calendar')}>

        <Calendar minDate={new Date()} onChange={onChange} value={date} className={cx('react-calendar')}/>

        <div className={cx('calendar__flex-date')}>
          <label className={cx('flex-date__check')}>
            <input className={cx('check__input')} type="checkbox" onChange={() => {
              setCheck(!check)
              }}/>
              <span className={cx('check__text')}>± 3 дня (гибкие даты)</span>
            </label>
        </div>

        {/* {check ? (
          <input type="text" value={'C ' + firstDay + ' ' + firstMonth + ' по ' + lastDay + ' ' + lastMonth}/>
        ) : (
          <input type="text" value={ day + ' ' + monthArr[date.getMonth()]}/>
        )} */}
        
        </div>
      </div>
  );
}

// export const MyCalendar = ({arr}) => {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={value}
//       />
//     </div>
//   );
// }