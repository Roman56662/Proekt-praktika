import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecFilter } from '../../components/sections/SecFilter'
import { SecTours } from '../../components/sections/SecTours/SecTours'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const Tours = ({}) => {
    
  return(
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter />
          </section>
          <section>
            <SecTours />
          </section>
        </div>
      </main>
      <footer>
          <div className={cx('container')}>
            <Footer />
          </div>
        </footer>
    </Page>
  )
}

export default Tours;