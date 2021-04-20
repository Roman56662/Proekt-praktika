import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardRating = ({rating}) => {

  let modTravelCard = ''
  switch (true) {
    case rating>=0 && rating<=3:
      modTravelCard = '-bad'
      break;
    case rating>=4 && rating<=6:
      modTravelCard = '-normal'
      break;
    case rating>=7 && rating<=10:
      modTravelCard = '-good'
      break; 
    default:
      modTravelCard = ''
      break;
  }

  return(
    <div className={cx('travel-card__rating + travel-card__rating'+modTravelCard)}>
      {/* <p>Оценка</p> */}
      <span>{rating}</span>
    </div>
  )
}