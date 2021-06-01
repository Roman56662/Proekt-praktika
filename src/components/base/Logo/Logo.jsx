import React from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Logo = ({}) => {

  const image = 'http://localhost:3001/static/logo.png'
  
  return(
      <a className={(cx('logo__img'))} href="/">
        <img src={image} alt="logo"/>
      </a>
  )
}