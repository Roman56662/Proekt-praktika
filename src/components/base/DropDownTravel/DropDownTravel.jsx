import React, { useCallback, useContext, useState } from 'react';
import cn from 'classnames/bind';
<<<<<<< HEAD
import DropDown from './DropDown'
=======
import {DropDown} from './DropDown'
>>>>>>> dev1
import Context from './Context';


//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

<<<<<<< HEAD
const DropDownTravel = (props) => {
=======
export const DropDownTravel = (props) => {
>>>>>>> dev1

  const [country, setCountry] = useState()

  const handleClick = useCallback( (q) => {
    setCountry(q);
  })

  // props.getCountry(country)

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
    <Context.Provider value={{handleClick}}>
        <DropDown arr={regions}/>
    </Context.Provider>
  )
}

<<<<<<< HEAD
export default DropDownTravel
=======
>>>>>>> dev1

