import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './button.styl';
const cx = cn.bind(styles);

export const Button = ({link, title, onClick, theme}) => {

  return(
    <button onClick={onClick} className={cx('Button',{[`Button_theme_${theme}`]: theme})}>
      <a href={link}>{title}</a> 
    </button>
  )
}