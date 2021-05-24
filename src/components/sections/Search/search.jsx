import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {Cardssearch} from './cardsSearch'
//Styles
import styles from '../../styles.styl';

const cx = cn.bind(styles);

export const Search = () => {

    return (
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Cards_Search_Cards_Filtred')}>
            <Cardssearch/>
            </div>
            <Footer/>
        </div>

    )
}