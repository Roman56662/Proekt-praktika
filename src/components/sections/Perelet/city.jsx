import React, {useState,useMemo} from 'react'
import cn from 'classnames/bind';
//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

const cityInfo = [
    { Name: 'Ростов-на-Дону',
    info:'RostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostovRostov',
    foto:<div className={cx('City_Perelet_Info_Foto')}>
        <div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
</div>},
    { Name: 'Сочи',
    info:'СочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочиСочи',
    foto:<div className={cx('City_Perelet_Info_Foto')}>
    <div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
<div><img src='https://i.ytimg.com/vi/M6rQ0x0M0IE/hqdefault.jpg'></img></div>
</div>}
]


export const City = () => {

const [citySelect,setCitySelect] = useState();


const handleChange = (e) => {
    setCitySelect(e.target.value)
}
console.log(citySelect)
console.log(cityInfo.foto)
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
            <div className={cx('City_Perelet_Foto')}>
                    {cityInfo.map((item) => (
                        item.Name == citySelect ? item.foto:''
                    ))}
                        
                        
                        
            
            </div>
        </div>
    )
}