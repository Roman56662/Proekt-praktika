import React from 'react';
import cn from 'classnames/bind';
import { Header } from '../../sections/Header/Header'
import { Footer } from '../../sections/Footer/Footer'
import { SecFilter } from '../../sections/SecFilter'
import { SecPopular } from '../../sections/SecPopular'
import { SecAboutTours } from '../../sections/SecAboutTours/SecAboutTours'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const Home = ({}) => {
    
  return(
    <main>
      <Header />
      <div className={cx('container')}>
        <section>
          <SecFilter />
        </section>
        <section>
          <SecPopular />
        </section>
        <section>
          <SecAboutTours />
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