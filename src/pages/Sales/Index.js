import React, { useEffect, useState} from 'react'
import cn from 'classnames/bind';
import axios from 'axios'
import Link from '@ch/next-router/Link';
import Page from 'components/environment/Page';
import Navigation from '../../components/sections/components/navigation'
import {Footer} from '../../components/sections/components/footer'
import {Cards} from '../../components/sections/Sales/cards'
import styles from '../../components/styles.styl';
const cx = cn.bind(styles);

const Sales = () => {
    const [cardsSales, setCardsSales] = useState([])
    
    useEffect( () => {
        async function fetchData() {
          const request = await axios.get('http://localhost:3001/base/sales')
          setCardsSales(request.data)
          return request
        }
        fetchData()
      },[])
    return (
        <Page>
        <div className={cx('sales_Page')}>
            <Navigation/>
            <div className={cx('Main')}>
            <div className={cx('sales_Page_Cards')}>
                <Cards cardsSales={cardsSales}/>
            </div>
            </div>
            <Footer/>
        </div>
        </Page>
    )
}
export default Sales;