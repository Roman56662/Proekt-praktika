import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardStars = ({stars}) => {

  const link = "http://localhost:3001/static/star.png"
  
switch (stars) {
  case 1:
    return(
      <div className={cx('travel-card__stars')}>
        <img src={link} alt=""/>
      </div>
    )
    break;
    case 2:
      return(
        <div className={cx('travel-card__stars')}>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
        </div>
      )
      break;
    case 3:
      return(
        <div className={cx('travel-card__stars')}>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
        </div>
      )
      break;
    case 4:
      return(
        <div className={cx('travel-card__stars')}>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
        </div>
      )
      break;
    case 5:
      return(
        <div className={cx('travel-card__stars')}>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
          <img src={link} alt=""/>
        </div>
      )
      break;
}
  return(
    <div className={cx('travel-card__stars')}>
    </div>
  )
}