import React, { useContext } from 'react'
import cn from 'classnames/bind';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import {Footer} from '../../components/sections/components/footer'
import styles from '../../components/styles.styl';
import { City } from '../../components/sections/Perelet/city';
const cx = cn.bind(styles);

const Perelet = () => {

    return (
        <Page>
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div className={cx('sales_Page_Cards')}>
                <City/>
            </div>
            <Footer/>
        </div>
        </Page>
    )
}
export default Perelet;