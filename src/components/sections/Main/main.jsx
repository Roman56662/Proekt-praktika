import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {SliderTest} from '../../base/Slider/Slider'
import {Searchstring} from './searchstring'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);

export const Main = () => {

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Searchstring')}>
                <Searchstring/>
            </div>
            <div className={cx('test')}>
            <SliderTest/>
            </div>
            <Footer/>
        </div>
    )
}
