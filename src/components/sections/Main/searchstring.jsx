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
                <input placeholder='Откуда' style={{width:'140px'}} ></input>
                <input placeholder='Куда' style={{width:'140px'}}></input>
                <input placeholder='Дата вылета' type='datetime-local'style={{width:'140px'}}></input>
                <input placeholder='Пасажиры'style={{width:'120px'}}></input>
                <button>Найти</button>
            </div>

        </div>
    )

}