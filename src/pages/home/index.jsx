import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
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
  const title = useSelector(state => state.home.title);

  const [countryAarr, setCountryAarr] = useState([])  

  useEffect( () =>{
    async function fetchData() {
      let response = await fetch('http://localhost:3001/api/base/home')
      setCountryAarr(await response.json())
    }
    fetchData()
},[])

useEffect( () => {
  async function fetchPost() {
    let user = {
      name: 'John',
      surname: 'Smith'
    };
    
    let response = await fetch('http://localhost:3001', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    });
    
    let result = await response.json();
    alert(result.message);
    
  }
  fetchPost()
},[])
  



  return (
    <Page>
      <Header />
      <main>
        <div className={cx('container')}>
          <section>
            <SecFilter countryAarr={countryAarr}/>
          </section>
          <section>
            <SecPopular arr={countryAarr}/>
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