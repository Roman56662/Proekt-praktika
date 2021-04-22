import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';


const cx = cn.bind(styles);

export const ArrowLeft = ({className, style, onClick}) => {

  return (
    <div
      // className={className}
      className={className +' '+ cx('custom__arrow custom__arrow-right')}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}