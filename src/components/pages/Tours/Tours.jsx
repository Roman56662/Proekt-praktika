import React from 'react';
import cn from 'classnames/bind';
import { Header } from '../../sections/Header/Header'
import { Footer } from '../../sections/Footer/Footer'
import { SecFilter } from '../../sections/SecFilter'
import { SecTours } from '../../sections/SecTours/SecTours'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Tours = ({}) => {
    
  return(
    <main>
      <Header />
      <div className={cx('container')}>
        <section>
          <SecFilter />
        </section>
        <section>
          <SecTours />
        </section>
      </div>
      <footer>
        <div className={cx('container')}>
          <Footer />
        </div>
      </footer>
      
    </main>
  )
}