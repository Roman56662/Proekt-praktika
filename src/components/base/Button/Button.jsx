import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './button.styl';
const cx = cn.bind(styles);

export const Button = ({title, onClick, style}) => {

  return(
    <button onClick={onClick} className={style}>
      <p>{title}</p> 
    </button>
  )
}