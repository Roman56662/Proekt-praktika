import React, { useCallback, useState } from 'react';
import { ImageSlider } from './ImageSlider';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const Carousel = ({base}) => {

  return(
    <div>
      <ImageSlider base={base}/>
    </div>
  )
}