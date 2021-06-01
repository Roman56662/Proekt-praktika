import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import { Tour } from '../../base/Tour/Tour'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecChooseTour = ({tourArr, hotelArr}) => {

  const base = [
    {
      date: '25',
      month: 'апр',
      countNights: 6,
      live: 1,
      nutrition: 'Только завтрак',
      fly: 1,
      transfer: 1,
      health: 1,
      roomPlace: '3-х мест.',
      roomType: 'люкс'
    },
    {
      date: '25',
      month: 'апр',
      countNights: 4,
      live: 1,
      nutrition: ' ',
      fly: 0,
      transfer: 0,
      health: 0,
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    },
    {
      date: '25',
      month: 'апр',
      countNights: 3,
      live: 1,
      nutrition: ' ',
      fly: 1,
      transfer: 1,
      health: 0,
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    },
    {
      date: '27',
      month: 'апр',
      countNights: 2,
      live: 1,
      nutrition: ' ',
      fly: 1,
      transfer: 1,
      health: 1,
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    }
  ]

console.log(tourArr)

  return(
    <div className={cx('section__choose-tour')}>
      <div className={cx('section__title')}>
        <h1>Выберите тур</h1>
      </div>
      <div className={cx('section__choose-tour__body')}>
        <div className={cx('choose-tour__tour')}>
          {
            tourArr.map((item, key) => {
              return(
                <Tour 
                  key={key} 

                  dateArrive={item.dateArrive}
                  dateDepart={item.dateDepart}
                  // month={item.month}
                  // countNights={item.countNights}
                  roomPlace={item.room.countPeople}
                  roomType={item.room.type}
                  // live={item.live}
                  nutrition={item.nutrition}
                  fly={item.fly}
                  transfer={item.transfer}
                  health={item.health}
                  price={item.price}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}