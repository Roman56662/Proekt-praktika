import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {Searchstring} from './searchstring'
import {Cardssearch} from './cardsSearch'
//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

export const Main = () => {

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Main')}>
                <div className={cx('Searchstring')}>
                <Searchstring/>
                </div>
                <div className={cx('test')}>
                <Cardssearch cardsTest={cardsTest}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
