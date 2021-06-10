import React, { useState } from 'react';
import cn from 'classnames/bind';



//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Review = ({user, date, figure, text}) => {

  let modReview = ''
  switch (true) {
    case figure>=0 && figure<=3:
      modReview = '-bad'
      break;
    case figure>=4 && figure<=6:
      modReview = '-normal'
      break;
    case figure>=7 && figure<=10:
      modReview = '-good'
      break;
  
    default:
      modReview = ''
      break;
  }

  let fullText = text
  const [open, setOpen] = useState(false)


  return(
    <div className={cx('review')} >
      <div className={cx('review__inf')}>
        <div className={cx('review__inf__col1')}>
        <div className={cx('review__user')}>
          <p>{user}</p>
        </div>
        <div className={cx('review__date')}>
          <p>{ new Date(date).getDate() + '.' + new Date(date).getMonth() + '.' + new Date(date).getFullYear() }</p>
        </div>
        </div>
        <div className={cx('review__inf__col2')}>
        <div className={cx('review__figure '+'review__figure'+modReview)}>
          <p><span>{figure}</span> из 10</p>
        </div>
        </div>
      </div>
      <div className={cx('review__text')}>
        <p>
          { (open == false && fullText.length > 100) ? fullText.slice(0, 220) : fullText}
        </p><span onClick={() => setOpen(!open)} >
          { fullText.length > 228 ? (open == false ? 'show more' : 'show less') : ''}
        </span>
      
      </div>
    </div>
  )
}