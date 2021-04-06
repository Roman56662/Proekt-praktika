import React, { useCallback, useState } from 'react';
import {Review} from './Review'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Reviews = ({user, date, figure, text}) => {
  return(
    <Review user={user} date={date} figure={figure} text={text} />
  )
}