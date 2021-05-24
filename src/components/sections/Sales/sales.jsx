import React, { useContext } from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import {Cards} from './cards'

//Styles
import styles from '../../styles.styl';
const cx = cn.bind(styles);



export const Sales = () => {

    return (
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div className={cx('sales_Page_Cards')}>
                <Cards/>
            </div>
            <Footer/>
        </div>
    )
}