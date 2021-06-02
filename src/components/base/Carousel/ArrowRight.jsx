import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowRight = ({nextSlide}) => {

  return (
    <div onClick={nextSlide} className={cx('slider__arrow slider__arrow-right')}>
      <img src="http://localhost:3001/static/right-arrow.png" alt=""/>
    </div>
  );
}

