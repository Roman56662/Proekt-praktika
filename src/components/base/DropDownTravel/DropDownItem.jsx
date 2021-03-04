import React, {  useState } from 'react';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const DropDownItem = ({onClick, title, price}) => {

  

  return(
    <div onClick={() => onClick(title)} className={cx('drop__element')}>
      <li className={cx('drop__element-li')}>
        <span className={cx('drop__element-title')}>{title}</span>
        <span className={cx('drop__element-price')}>{price}</span>
      </li>
    </div>
  )
}

