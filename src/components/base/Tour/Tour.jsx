import React, { useState, useMemo } from 'react';
import { TourIcons } from './TourIcons'
import { Button } from '../Button/Button'

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Tour = ({date, month, countNights, roomPlace, roomType,
                      live, nutrition, fly, transfer, health, price}) => {
                      
  let count = countNights
  const title = useMemo(() => {
      let nigthTitle = 'Ночь'
      if (count < 5 && count != 1) {
          nigthTitle = 'Ночи'
      }
      if (count > 4) {
          nigthTitle = 'Ночей'
      }
      return nigthTitle
  }, [count])

  let d = new Date(date);
  let day = d.getDay() + 1
  let monthNumber = d.getMonth()

  const monthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 

  







  return(
    <div className={cx('tour')}>
    <div className={cx('tour__body')}> 
      <div className={cx('tour__block tour__date')}>
        <p>{day}</p>
        <br/>
        <span>{monthArr[monthNumber]}</span>
      </div>
      <div className={cx('tour__block tour__nigths')}>
        <p>{countNights} {title}</p>
      </div>
      <div className={cx('tour__block tour__nutrition')}>
        <p>
          {nutrition === true ? 'Питание включено' : 'Питание не включено'}
        </p>
      </div>
      <div className={cx('tour__block tour__room')}>
        <p>Номер: <span>{roomType}</span></p>
        <p>Кол-во комнат <span>{roomPlace}</span></p>
      </div>
      <div className={cx('tour__block tour__icons')}>
        <TourIcons 
          live={live} 
          nutrition={nutrition} 
          fly={fly} 
          transfer={transfer}
          health={health}
        />
      </div> 
    </div>
      <div className={cx('tour__block_button')}>
        <Button link='' title={'Посмотреть тур от ' + price}  theme={'_button_yellow_bordered tour__button '} />
      </div>
    </div>
  )
}