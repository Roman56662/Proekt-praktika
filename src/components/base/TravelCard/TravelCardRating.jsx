import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardRating = ({rating}) => {

  return(
    <div className={cx('travel-card__rating')}>
      {/* <p>Оценка</p> */}
      <span>{rating}</span>
    </div>
  )
}