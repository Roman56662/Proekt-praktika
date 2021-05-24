import React from 'react'
import Navigation from './navigation'
import cn from 'classnames/bind';
import {Footer} from './footer'
import {City} from './city'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

export const Perelet = () => {

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('City')}>
                <City/>
            </div>
            <Footer/>
        </div>
    )
}