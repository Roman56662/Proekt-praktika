import React, {  useState, useEffect } from 'react';
import cn from 'classnames/bind';
import { TouristString } from '../../base/TouristString/TouristString'
import { Button } from '../../base/Button/Button'
//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecTourist = ({arr}) => {
  
  const personText = 'Ваши e-mail и телефон - для получения писем и сообщений о купленном туре'
  const email = 'user@mail.ru'
  const phone = '+7(999)-999-99-99'

  return(
      <div className={cx('section_tourist')} >
        <div className={cx('section__title')}>
          <h1>Данные туриста</h1>
        </div>
        <div className={cx('section__personal-data')}>
          <div>
            <p>{personText}</p>
          </div>
          <div className={cx('email')}>
            <input type='email' placeholder={email}/>
          </div>
          <div className={cx('email')}>
            <input type='tel' placeholder={phone}/>
          </div>
        </div>
        <div className={cx('block-tourist-cards')}>
          <TouristString/>
        </div>
        <div className={cx('booking')} >
        <Button link='#' title={'Забронировать'}  theme={'_button_yellow travel-card__button'} />
        </div>
      </div>
  )
}