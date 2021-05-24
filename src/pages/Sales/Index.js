import React, { useContext } from 'react'
import cn from 'classnames/bind';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/Sales/navigation'
import {Footer} from '../../components/sections/Sales/footer'
import {Cards} from '../../components/sections/Sales/cards'
import styles from '../../components/styles.styl';
const cx = cn.bind(styles);

const Sales = () => {

    return (
        <Page>
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div className={cx('sales_Page_Cards')}>
                <Cards/>
            </div>
            <Footer/>
        </div>
        </Page>
    )
}
export default Sales;