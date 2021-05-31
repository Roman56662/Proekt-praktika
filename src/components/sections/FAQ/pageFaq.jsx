import React from 'react'
import Navigation from '../components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../components/footer'
import { Faq } from './faq';
import styles from '../../styles.styl';
const cx = cn.bind(styles);


export const pageFaq = () =>{

    return(
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Main')}>
                <Faq/>
            </div>
            <Footer/>
        </div>)

}
