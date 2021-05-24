import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import {TourIcons} from './TourIcons'
import {Button} from '../Button/Button'
import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecFilter } from '../../components/sections/SecFilter'
import { SecPopular } from '../../components/sections/SecPopular'
import { SecAboutTours } from '../../components/sections/SecAboutTours/SecAboutTours'

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

  return(
    <div className={cx('tour')}>
    <div className={cx('tour__body')}> 
      <div className={cx('tour__block tour__date')}>
        <p>{date}</p>
        <br/>
        <span>{month}</span>
      </div>
      <div className={cx('tour__block tour__nigths')}>
        <p>{countNights} {title}</p>
      </div>
      <div className={cx('tour__block tour__nutrition')}>
        <p>
          {nutrition === ' ' ? 'Питание не включено' : nutrition}
        </p>
      </div>
      <div className={cx('tour__block tour__room')}>
        <p>Номер: <span>{roomPlace} <br/> {roomType}</span></p>
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
        <Button link='' title={'Посмотреть тур от '}  theme={'_button_yellow_bordered tour__button '} />
      </div>
    </div>
  )
}