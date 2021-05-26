import React, { useContext } from 'react'
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../../components/sections/components/footer'
import {Cardssearch} from '../../components/sections/Search/cardsSearch'
//Styles
import styles from '../../components/styles.styl';

const cx = cn.bind(styles);

const Search = () => {

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
export default Search;