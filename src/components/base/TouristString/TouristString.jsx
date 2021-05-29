import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TouristString = ({key}) => {

  
  return(
    <div className={cx('tourist-string')} >
      <p>Турист #{key}</p>
      <div className={cx('string')} >
        <div className={cx('fam')}>
          <input type="text" placeholder='Фамилия' />
        </div>
        <div className={cx('name')}>
          <input type="text" placeholder='Имя' />
        </div>
        <div className={cx('date')}>
          <input type="date" placeholder='Дата рождения' />
        </div>
        <div className={cx('from')}>
          <input type="text" placeholder='Гражданство' />
        </div>
        <div className={cx('pas-number')}>
          <input type="number" placeholder='Номер загранпаспорта' />
        </div>
        <div className={cx('pas-date')}>
          <input type="date" placeholder='Окончание дейстаия' />
        </div>
      </div>
    </div>
  )
}