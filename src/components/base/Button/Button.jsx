import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './button.styl';
const cx = cn.bind(styles);

export const Button = ({link, title, onClick, theme}) => {

  return(
    <a href={link}>
      <button onClick={onClick} className={cx('Button',{[`Button_theme_${theme}`]: theme})}>
        <p href={link}>{title}</p> 
      </button>
    </a>
  )
}