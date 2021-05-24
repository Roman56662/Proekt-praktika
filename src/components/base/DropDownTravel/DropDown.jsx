import React, { useState } from 'react';
import {DropDownItem} from './DropDownItem'
import cn from 'classnames/bind';

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const DropDown = ({arr, handleClick}) => {

  const [country, setCountry] = useState()

  // const handleClick = useCallback((q) => {
  //   setCountry(q)
  // }, [q])
  //   const handleClick = useCallback( (q) => {
  //   setCountry(q); 
  // })

  return(
      <div className={cx('drop__body')}>
        <ul className={cx('drop__list')}>
          <span className={cx('list__popular')}> Популярные направления </span>
          {arr.map((region, key) => {
            if (region.popular === true) {
              return(
                <DropDownItem
                  key={key}
                  title={region.title}
                  price={region.price}
                  onClick={handleClick}
                />
              )
            }
          })}
          <span className={cx('list__popular')}> Остальные направления </span>
          {arr.map((region, key) => {
            if (region.popular !== true) {
              return(
                <DropDownItem
                  key={key}
                  title={region.title}
                  price={region.price}
                  onClick={handleClick}
                />
              )
            }
          })}
        </ul>
      </div>
  )
}

