import React, {useState,useMemo,useCallback} from 'react'
import cn from 'classnames/bind';
import {Humans} from '../../base/DropDownList/Humans'
//Styles
import styles from '../../styles.styl';

const cx = cn.bind(styles);




export const BookingCard = ({ticket}) => {
   const [docNumber,setDocNumber] = useState();
   let checkNumberKey = key => key >= '0' && key <= '9';
   let checkFIOKey = key => ((key>= 'А' && key <='Я')|| (key>= 'А' && key <='я')||(key>= 'а' && key <='я'))
   let howDigits = str => str.split('').filter(el => /\d/.test(el)).length;

  const handleChange1 = (e) => {
    if(!checkNumberKey(e.target.value[e.target.value.length - 1]) || howDigits(e.target.value) > 4)
        e.target.value = e.target.value.slice(0, -1)
  }
  const handleChange2 = (e) => {
    if(!checkNumberKey(e.target.value[e.target.value.length - 1]) || howDigits(e.target.value) > 6)
        e.target.value = e.target.value.slice(0, -1)
  }
  const handleChange3 = (e) => {
    if(!checkFIOKey(e.target.value[e.target.value.length - 1]) || howDigits(e.target.value) > 4)
        e.target.value = e.target.value.slice(0, -1)
  }
  const handleChange4 = (e) => {
    if(!checkFIOKey(e.target.value[e.target.value.length - 1]) || howDigits(e.target.value) > 4)
        e.target.value = e.target.value.slice(0, -1)
  }
  
  const nameString = [
    {
        Name: <div className={cx('Booking_Card_nameString')}>
        <input placeholder='Фамилия' type='text' onChange={handleChange3}></input>
        <input placeholder='Имя' type='text' onChange={handleChange4}></input>
        <input placeholder='Дата рождения' type='date'></input>
        <input placeholder='Серия документа' type='number' onChange={handleChange1} className={cx('seria')}></input>
        <input placeholder='Номер документа' type='number' onChange={handleChange2} className={cx('nomer')}></input>
        </div>}
]

    
 


        const [countParents, setCountParents] = useState(1)
        const [countChildrens, setCountChildrens] = useState(0)
        const handleClickParents = useCallback((znakParents) => {
          if (znakParents === 'minusParents') {
            const resParents = countParents - 1;
            if (resParents > 0) {
              setCountParents(resParents)
            }
          } else {
            if (countParents<5) {
            const p = countParents + 1;
            setCountParents(p)
            }
          }
        }, [countParents])
        const handleClickChildrens = useCallback((znakChildrens) => {
          if (znakChildrens === 'minusChildren') {
            const resChildrens = countChildrens - 1;
            if (countChildrens > 0) {
              setCountChildrens(resChildrens)
            }
          } else {
            if (countChildrens<5) {
            const c = countChildrens + 1;
            setCountChildrens(c)
            }
          }
        }, [countChildrens]) 
    
const nameStringCopy = nameString.map((item) => {
        return ( 
        <div>{item.Name}</div>
        )
       })
       
       const count = countParents + countChildrens;
       const nameArray =[];
       for (let i = 0; i < count; i++) {
        let j=i+1
        nameArray.push(<h2 className={cx('Booking_Card_Humans_H1')}>{j} Пассажир</h2>)
        nameArray.push(nameStringCopy);
      }
      
      // console.log(ticket)

    return(
        <div className={cx('Booking_Card')}>
            <h1>Авиабилет</h1>
            <div className={cx('Booking_Card_Search')}>
                <h2>{ticket.cityO} - {ticket.cityP}</h2>
                <h2>Дата отправки {ticket.dataO}</h2>
                <Humans countParents={countParents} countChildrens={countChildrens} onClickChildrens={handleClickChildrens} onClickParents={handleClickParents}/>
            </div>
            <div className={cx('Booking_Card_Humans')}>
                <div className={cx('Booking_Card_Humans_H1')}>
                {nameArray.map((item) => {
                 return ( 
                 <div className ={cx('Booking_Card_Humans_Input')}>{item}</div>
                 )
                })}</div>
            </div>
            <div className={cx('Poser_Button')}><button>Забронировать</button></div>
            <h1>После бронирования Вы можете воспользоваться дополнительными услугами</h1>
        </div> 
    )
}