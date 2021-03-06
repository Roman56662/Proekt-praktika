import React, { useContext, useState } from 'react';
import Context from './Contextt';
import cn from 'classnames/bind';

//Styles
import styles from './styless.styl';
const cx = cn.bind(styles);

const DropDownItem = (props) => {

  const {handleClick} = useContext(Context)

  return(
    <div onClick={() => handleClick(props.title)} className={cx('drop__element')}>
      <li className={cx('drop__element-li')}>
        <span className={cx('drop__element-title')}>{props.title}</span>
        <span className={cx('drop__element-price')}>{props.price}</span>
      </li>
    </div>
  )
}

export default DropDownItem