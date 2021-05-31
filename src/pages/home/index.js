import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import cn from 'classnames/bind';
import {Footer} from '../../components/sections/components/footer'
import {Searchstring} from '../../components/sections/Main/searchstring'
import {Cardssearch} from '../../components/sections/Main/cardsSearch'
import styles from '../../components/styles.styl';
const cx = cn.bind(styles);

const Main = () => {
  const [cardsTest, setCardsTest] = useState([]) 
 
    useEffect( () => {
      async function fetchData() {
        const request = await axios.get('http://localhost:3001/')
        setCardsTest(request.data)
        return request
      }
      fetchData()
    },[])
  return (
    <Page>
     <div className={cx('border')}>
            <Navigation/>
            <div className={cx('Main')}>
            <div className={cx('Searchstring')}>
                <Searchstring/>
            </div>
            <div className={cx('test')}>
                <Cardssearch cardsTest={cardsTest}/>
            </div></div>
            <Footer/>
        </div>
    </Page>
  );
};

export default Main;
