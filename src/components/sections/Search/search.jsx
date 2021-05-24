import React from 'react'
import cn from 'classnames/bind';
import Navigation from './navigation'
import {Footer} from './footer'
import {Cardssearch} from './cardsSearch'
//Styles
import styles from '../../styles.styl';
import cardsSearchStories from './cardsSearch.stories';
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