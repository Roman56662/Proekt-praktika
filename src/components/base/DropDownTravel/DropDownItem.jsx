import React, { useContext, useState } from 'react';
import Context from './Context';
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

<<<<<<< HEAD
const DropDownItem = (props) => {
=======
export const DropDownItem = (props) => {
>>>>>>> dev1

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

<<<<<<< HEAD
export default DropDownItem
=======
>>>>>>> dev1
