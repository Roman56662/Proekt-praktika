import React, {useMemo} from 'react'
import cn from 'classnames/bind';

import {Card} from './Card'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);



export const Cardssearch = ({tickets,cardsTest}) => {
    



    
    return(
        <div className={cx('Cards_Search_P')}>
            <div className={cx('Cards_Search_PP')}>
                <p>Доступные билеты</p>
            </div>
            <div className={cx('Cards_Search')}>
            <div className={cx('Cards_Search_Cards')}>
            {cardsTest.map((item, key) => (
                    <Card key={key} item={item}/>
                ))}
            </div>
            </div>
        </div>
    )
} 