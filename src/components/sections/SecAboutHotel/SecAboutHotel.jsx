import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecAboutHotel = ({about, mapPos}) => {



  return(
    <div className={cx('section__about-hotel')}>
      <div className={cx('section__title')}>
        <h1>Об отеле</h1>
      </div>
      <div className={cx('section__about-hotel__body')}>
        <div className={cx('about-hotel__text')}>
          <p>{about}</p>
        </div>
        <div className={cx('about-hotel__map')}>
          <iframe src={mapPos} width="100%" height="400" frameborder="0"></iframe>
        </div>
      </div>
      
    </div>
  )
}