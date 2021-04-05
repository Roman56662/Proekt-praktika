import React, { useState, useCallback } from 'react';
import { PreviewCard } from './PreviewCard';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'PreviewCard',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const Test = () => {

  const base = [
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197408.svg?token=exp=1616928622~hmac=0f089f491f5b4750bfd75c7d73f61234',
      country: 'Россия',
      price: '50 000',
      back: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1616928622~hmac=2eb5f9675b083c4e0203c0b6e92f1569',
      country: 'Америка',
      price: '120 000',
      back: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    },
    {
      flag: 'https://www.flaticon.com/svg/vstatic/svg/197/197571.svg?token=exp=1616928622~hmac=9be1edf529a1c2008af9413fcd825c3c',
      country: 'Германия',
      price: '60 000',
      back: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    },
  ]
  

  return (    
    <div>
    {base.map((baseItem, index) => {
      return(
        <PreviewCard 
          index={index} 
          key={baseItem.id} 

          mod={'-large'}
          back={baseItem.back}
          flag={baseItem.flag}
          country={baseItem.country}
          price={baseItem.price}
        />
      )
    })}
  </div>
  )
}

export const example = () => <Test />