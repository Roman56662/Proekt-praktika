import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowLeft = ({pervSlide}) => {

  return(
    <div onClick={pervSlide} className={cx('slider__arrow slider__arrow-left')}>
      <img src="https://www.flaticon.com/svg/vstatic/svg/126/126492.svg?token=exp=1617823563~hmac=40d7d00d02d94d7039fb986cfad23e79" alt=""/>
    </div>
  )
}