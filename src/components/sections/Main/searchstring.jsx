import React from 'react'
import cn from 'classnames/bind';

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const Searchstring = () => {

    return(
        <div>
            <div className={cx('Search_String')}>
                <h1>Укажите маршрут, куда Вы хотите отправиться</h1>
            </div>
            <div className={cx('Filters_searchstring')}>
                <select>
                    <option value='' selected></option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
                <select>
                    <option value='' selected></option>
                    <option value='Москва'>Москва</option>
                    <option value='Ростов-на-Дону'>Ростов-на-Дону</option>
                    <option value='Сочи'>Сочи</option>
                    <option value='Санкт-Петербург'>Санкт-Петербург</option>
                </select>
                <input placeholder='Дата вылета' type='datetime-local'style={{width:'240px'}}></input>
                <button>Найти</button>
            </div>

        </div>
    )

}