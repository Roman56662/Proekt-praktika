import React, {useState} from 'react'
import cn from 'classnames/bind';
import axios from 'axios'
//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const Searchstring = () => {

    const [citySelectO,setCitySelectO] = useState();
    const [citySelectP,setCitySelectP] = useState();
    const [dataSelect,setDataSelect] = useState();
    
    const handleChange1 = (e) => {
        setCitySelectO(e.target.value)
    }
    const handleChange2 = (e) => {
        setCitySelectP(e.target.value)
    }
    const handleChange3 = (e) => {
        setDataSelect(e.target.value)
    }
    const data = {citySelectO,citySelectP,dataSelect}
    console.log(citySelectO)
    console.log(citySelectP)
    console.log(dataSelect)
    console.log(data)
const searchClick = () =>{
    const filters = data
    // POST
          axios.post('http://localhost:3001/base/bullets', filters)
          .then(res => {
              responseData = res.filters
              if (responseData.status == 'success') {
                const user = responseData.user
              } else {
                alert('Something went wrong while creating account')
              }
          })
          }
    return(
        <div>
            <div className={cx('Search_String')}>
                <h1>Укажите маршрут, куда Вы хотите отправиться</h1>
                {((citySelectO == undefined)||(citySelectP ==undefined)||(dataSelect ==undefined) ? <p className={cx('Errors_P')}>Пожалуйста, заполните все поля, прежде чем искать авиабилеты</p>:'')}
            </div>
            <div className={cx('Filters_searchstring')}>
                <select onChange={handleChange1}>
                    <option value='' selected>Откуда</option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
                <select onChange={handleChange2}>
                    <option value='' selected>Куда</option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
                <input placeholder='Дата вылета' type='date'style={{width:'240px'}} onChange={handleChange3}></input>
                <a href={((citySelectO == undefined)||(citySelectP ==undefined)||(dataSelect ==undefined) ? '':'/Search')}><button onClick={searchClick}>Найти</button></a>
            </div>
            
        </div>
    )

}