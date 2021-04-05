import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardStars = ({stars}) => {

  return(
    <div className={cx('travel-card__stars')}>
      <img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt=""/>
      <img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt=""/>
      <img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt=""/>
      <img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt=""/>
      <img src="https://cdn.icon-icons.com/icons2/1077/PNG/512/star_77949.png" alt=""/>
    </div>
  )
}