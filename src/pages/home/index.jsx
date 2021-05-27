import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';

import cn from 'classnames/bind';
import { Header } from '../../components/sections/Header/Header'
import { Footer } from '../../components/sections/Footer/Footer'
import { SecFilter } from '../../components/sections/SecFilter'
import { SecPopular } from '../../components/sections/SecPopular'
import { SecAboutTours } from '../../components/sections/SecAboutTours/SecAboutTours'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

const HomePage = () => {

  const [countryArr, setCountryArr] = useState([]) 

  // GET COUNTRY
    useEffect( () => {
      async function fetchData() {
        const request = await axios.get('http://localhost:3001/api/base/country')
        setCountryArr(request.data)
        return request
      }
      fetchData()
    },[])

  return (
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter filterData={null}/>
          </section>
          <section>
            <SecPopular arr={countryArr} />
          </section>
          <section>
            <SecAboutTours />
          </section>
        </div>
      </main>
      <footer>
        <div className={cx('container')}>
          <Footer />
        </div>
      </footer>
    </Page>
  );
};

export default HomePage;

{/* <h1>Title:: {title}</h1>

<Link>empty</Link>
<br />
<Link href="/">Home Page</Link>
<br />
<Link href="http://localhost:3000/">http://localhost:3000/</Link>
<br />
<Link href="/kit">/kit</Link>
<br />
<Link href="/user/h123">/user/h123</Link>
<br />
<Link href="/ajkshdf">/ajkshdf</Link>
<br />
<Link href="/home#123">/home#123</Link>
<br />
<Link href="/home/#123?asd=123">/home/#123?asd=123</Link>
<br />
<Link href="http://yandex.ru/">http://yandex.ru/</Link>
<br />
<Link href="http://yandex.ru/?asd=123">http://yandex.ru/?asd=123</Link>
<br />
<Link href="/lk/test/kit">/lk/test/kit</Link>
<br /> */}