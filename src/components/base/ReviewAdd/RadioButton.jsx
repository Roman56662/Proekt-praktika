import React, { useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const RadioButton = ({text, getNumber}) => {

  const numberChange = () => {
    getNumber(text)
  }

  return(
    <div className={cx('review-add')} >
      <p>{text}</p>
      <input onChange={numberChange} name='radio' type="radio" />
    </div>
  )
}