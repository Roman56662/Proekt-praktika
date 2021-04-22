import React, {useMemo} from 'react';
import {TourIcons} from './TourIcons'

import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Tour = ({date, month, countNights, roomPlace, roomType,
                      live, nutrition, fly, transfer, health}) => {
                      
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

  const str = nutrition
  console.log({nutrition})
  return(
    <div className={cx('tour')}>
      <div className={cx('tour__date')}>
        <p>{date}</p>
        <span>{month}</span>
      </div>
      <div className={cx('tour__nigths')}>
        <p>{countNights} {title}</p>
      </div>
      <div className={cx('tour__nutrition')}>
        <p>
          {nutrition === ' ' ? 'Питание не включено' : nutrition}
        </p>
      </div>
      <div className={cx('tour__room')}>
        <p>Номер: <span>{roomPlace} {roomType}</span></p>
      </div>
      <div className={cx('tour__icons')}>
        <TourIcons 
          live={live} 
          nutrition={nutrition} 
          fly={fly} 
          transfer={transfer}
          health={health}
        />
      </div>
      <div className={cx('tour__button')}>
        button
      </div>
    </div>
  )
}