import React, { useState } from 'react';
import Context from './Context';
<<<<<<< HEAD
import DropDownItem from './DropDownItem'
=======
import {DropDownItem} from './DropDownItem'
>>>>>>> dev1
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

<<<<<<< HEAD
const DropDown = (props) => {
=======
export const DropDown = (props) => {
>>>>>>> dev1

  return(
    <div className={cx('drop__body')}>
      <ul className={cx('drop__list')}>
        <span className={cx('list__popular')}> Популярные направления </span>
        {props.arr.map((region, index) => {
          if (region.popular === true) {
            return(
              <DropDownItem
                region={region}
                index={index}
                key={region.id}
                title={region.title}
                price={region.price}
              />
            )
          }
        })}
        <span className={cx('list__popular')}> Остальные направления </span>
        {props.arr.map((region, index) => {
          if (region.popular !== true) {
            return(
              <DropDownItem
                region={region}
                index={index}
                key={region.id}
                title={region.title}
                price={region.price}
              />
            )
          }
        })}
      </ul>
    </div>
  )
}

<<<<<<< HEAD
export default DropDown
=======
>>>>>>> dev1
