import React, {useState,useMemo,useCallback} from 'react'
import cn from 'classnames/bind';
import {Humans} from '../../base/DropDownList/Humans'
//Styles
import styles from '../../styles.styl';

const cx = cn.bind(styles);

const nameString = [
    {
        Name: <div className={cx('Booking_Card_nameString')}>
        <input placeholder='Фамилия'></input>
        <input placeholder='Имя'></input>
        <input placeholder='Дата рождения'></input>
        <input placeholder='Номер документа'></input>
        </div>}
]


export const BookingCard = ({ticket}) => {

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
        nameArray.push(<h2>{j} Пассажир</h2>)
        nameArray.push(nameStringCopy);
      }
      
      console.log(ticket)

    return(
        <div className={cx('Booking_Card')}>
            <h1>Авиабилет</h1>
            <div className={cx('Booking_Card_Search')}>
                <h2>{ticket.cityO}</h2>
                <h2>{ticket.cityP}</h2>
                <h2>{ticket.dataO}</h2>
                <Humans countParents={countParents} countChildrens={countChildrens} onClickChildrens={handleClickChildrens} onClickParents={handleClickParents}/>
            </div>
            <div className={cx('Booking_Card_Humans')}>
                <div>
                {nameArray.map((item) => {
                 return ( 
                 <div>{item}</div>
                 )
                })}</div>
            </div>
            <div className={cx('Poser_Button')}><button>Забронировать</button></div>
            <h1>После бронирования Вы можете воспользоваться дополнительными услугами</h1>
        </div> 
    )
}