import React, { useContext } from 'react'
import cn from 'classnames/bind';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import {Footer} from '../../components/sections/components/footer'
import styles from '../../components/styles.styl';
import {Faq} from '../../components/sections/FAQ/faq'
const cx = cn.bind(styles);

const pagesFaq = () => {

    return (
        <Page>
        <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Main_Faq')}>
                <Faq/>
            </div>
            <Footer/>
        </div>
        </Page>
    )
}
export default pagesFaq;