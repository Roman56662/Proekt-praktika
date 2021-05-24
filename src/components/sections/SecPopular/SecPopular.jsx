import React, {  useState, useCallback, useMemo } from 'react';
import cn from 'classnames/bind';
import { PreviewCard } from '../../base/PreviewCard/PreviewCard'

//Styles
import styles from './styles.styl';
const cx = cn.bind(styles);

export const SecPopular = ({arr}) => {
  
  const base = [
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
      country: 'Турция',
      price: '50 000',
      back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
      country: 'ОАЭ',
      price: '120 000',
      back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
      country: 'Мексика',
      price: '60 000',
      back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
      country: 'Турция',
      price: '50 000',
      back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
      country: 'ОАЭ',
      price: '120 000',
      back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
      country: 'Мексика',
      price: '60 000',
      back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
    //   country: 'Турция',
    //   price: '50 000',
    //   back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
    //   country: 'ОАЭ',
    //   price: '120 000',
    //   back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    // },
    // {
    //   flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
    //   country: 'Мексика',
    //   price: '60 000',
    //   back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    // },
  ]

//  let count = 0

  return(
      <div className={('section_popular')} >
        <div className={('section__title')}>
          <h1>Популярные направления</h1>
        </div>
        <div className={('section__preview-card')}>
            <div className='block-preview-cards'>
              {arr.map((item, key) => {
                if (item.popular){
                  // count+=1
                  return(
                    <PreviewCard  
                      key={key} 
                      // mod={count % 5 == 0 ? '-large' : '-small'}
                      // back={item.back}
                      // flag={item.flag}
                      country={item.title}
                      // price={item.price}
                    />
                  )
                }
              })}
          </div>
        </div>
      </div>
  )
}