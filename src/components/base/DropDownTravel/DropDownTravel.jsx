import React, { useCallback, useState } from 'react';
import cn from 'classnames/bind';
import {DropDown} from './DropDown'



//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const DropDownTravel = ({getCountryFunc, arr}) => {

  // const [country, setCountry] = useState()

  // const handleClick = useCallback( (q) => {
  //   setCountry(q);
  // })

  // getCountry(country)

  const regions = (
    [
      {
        id: 1,
        title: 'Турция',
        price: ' от 36 524 ₽',
        popular: true
      },
      {
        id: 2,
        title: 'Россия',
        price: ' от 51 085 ₽',
        popular: true
      },
      {
        id: 3,
        title: 'Доминикана',
        price: ' от 106 741 ₽',
        popular: false
      }
    ]
  )

  return(
    
    <DropDown handleClick={getCountryFunc} arr={arr} />

  )
}


