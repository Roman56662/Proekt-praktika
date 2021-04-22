import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const TravelCardStars = ({stars}) => {

  return(
    <div className={cx('travel-card__stars')}>
      <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
      <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
      <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
      <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
      <img src="https://i7.pngflow.com/pngimage/414/415/png-symmetry-star-angle-design-angle-symmetry-art-star-clipart.png" alt=""/>
    </div>
  )
}