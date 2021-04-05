import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardBackground = ({backImg}) => {

  return(
    <div className={cx('travel-card__background')}>
      <img src={backImg} alt=""/>
    </div>
  )
}