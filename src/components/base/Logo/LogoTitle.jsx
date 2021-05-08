import React from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const LogoTitle = ({}) => {

  const title = 'Chulakov.Туры'
  
  return(
    <a className={(cx('logo__title'))} href="">{title}</a>
  )
}