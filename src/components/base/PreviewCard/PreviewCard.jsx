import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';

// Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const PreviewCard = ({mod, back, flag, country, price}) => {

  
  return(
    <div className={cx('preview-card'+mod)} >
      <div className={cx('preview-card__back')} >
        <img className={cx('back__img')} src={back} alt=""/>
        <div className={cx('preview-card__content')}>
          <div className={cx('preview-card__flag')} >
            <img src={flag} alt=""/>
          </div>
          <div className={cx('preview-card__country')} >
            <h3>{country}</h3>
          </div>
          <div className={cx('preview-card__price')} >
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}