import React from 'react'
import Navigation from './navigation'
import cn from 'classnames/bind';
import {Footer} from './footer'
import {SliderTest} from '../../base/Slider/Slider'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

export const Main = () => {

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('test')}>
            <SliderTest/>
            </div>
            <Footer/>
        </div>
    )
}