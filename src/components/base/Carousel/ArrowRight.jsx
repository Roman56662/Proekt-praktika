import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowRight = ({nextSlide}) => {

  return(
    <div onClick={nextSlide} className={cx('slider__arrow slider__arrow-right')}>
      <img src="https://www.flaticon.com/svg/vstatic/svg/126/126490.svg?token=exp=1617823563~hmac=d52393c5d1525b5926f7bed064069ffc" alt=""/>
    </div>
  )
}