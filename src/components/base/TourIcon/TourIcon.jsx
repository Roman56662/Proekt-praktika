import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';


// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TourIcon = ({title, image, anchor}) => {

  
  return(
    <div className={cx('tour-icon')}>
      <a href={anchor}>
        <img src={image} alt="tour-icon" />
        <p>{title}</p>
      </a>
    </div>
  )
}