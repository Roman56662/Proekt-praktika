import React, {useState,useMemo} from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const cityInfo = [
    { Name: 'Ростов-на-Дону',
    info:'RostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostov'},
    { Name: 'Сочи',
    info:'СочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочи'}
]


export const City = () => {

const [citySelect,setCitySelect] = useState();


const handleChange = (e) => {
    setCitySelect(e.target.value)
}
console.log(citySelect)

    return(
        <div>
            <div className={cx('City_Perelet_Select')}>
                <h1>Город в который Вы хотите отправиться</h1>
                <select onChange={handleChange}>
                    <option value='' selected></option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
            </div>
            <hr></hr>
            <div className={cx('City_Perelet_Info')}>
                {cityInfo.map((item, key) => (
                    item.Name == citySelect ? item.info:''
                ))}
            </div>
            <hr></hr>
        </div>
    )
}