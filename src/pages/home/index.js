import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../../components/sections/components/footer'
import {Searchstring} from '../../components/sections/Main/searchstring'
import styles from '../../components/styles.styl';
const cx = cn.bind(styles);

const Main = () => {
  return (
    <Page>
     <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Searchstring')}>
                <Searchstring/>
            </div>
            <Footer/>
        </div>
    </Page>
  );
};

export default Main;
