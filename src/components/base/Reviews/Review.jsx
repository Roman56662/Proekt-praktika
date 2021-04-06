import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Review = ({user, date, figure, text}) => {
  let modReview = ''
  switch (figure) {
    case 0:
    case 1:
    case 2:
    case 3:
      modReview = '-bad'
      break;
    case 4:
    case 5:
    case 6:
      modReview = '-normal'
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      modReview = '-good'
      break;
  
    default:
      modReview = ''
      break;
  }
  console.log(modReview)
  return(
    <div className={cx('review')} >
      <div className={cx('review__inf')}>
        <div className={cx('review__inf__col1')}>
        <div className={cx('review__user')}>
          <p>{user}</p>
        </div>
        <div className={cx('review__date')}>
          <p>{date}</p>
        </div>
        </div>
        <div className={cx('review__inf__col2')}>
        <div className={cx('review__figure '+'review__figure'+modReview)}>
          <p><span>{figure}</span> из 10</p>
        </div>
        </div>
      </div>
      <div className={cx('review__text')}>
        <p>{text}</p>
      </div>
    </div>
  )
}