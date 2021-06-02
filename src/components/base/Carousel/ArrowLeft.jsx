import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowLeft = ({pervSlide}) => {

  return (
    <div onClick={pervSlide} className={cx('slider__arrow slider__arrow-left')}>
      <img src="http://localhost:3001/static/left-arrow.png" alt=""/>
    </div>
  );
}