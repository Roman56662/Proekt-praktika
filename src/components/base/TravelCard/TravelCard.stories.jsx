import React, { useCallback, useMemo, useState } from 'react';
import { TravelCard } from './TravelCard';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'TravelCard',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  
  const base = [
    {
      id: 1,
      rating: '5.5',
      backImg: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg',
      stars: 1,
      hotel: 'Отель 1',
      city: 'Город 1',
      seaMeters: '150',
      beachType: 'Песчано-галечный',
      wifiType: 'Бесплатный',
      price: '30 000'
    },
    {
      id: 2,
      rating: '7.5',
      backImg: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg',
      stars: 2,
      hotel: 'Отель 2',
      city: 'Город 2',
      seaMeters: '50',
      beachType: 'Песчаный',
      wifiType: 'Платный',
      price: '85 000'
    },
    {
      id: 3,
      rating: '2.5',
      backImg: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg',
      stars: 3,
      hotel: 'Отель 3',
      city: 'Город 3',
      seaMeters: '400',
      beachType: 'Галечный',
      wifiType: 'Бесплатный',
      price: '105 000'
    }
  ]

  return (
  <div className='test'>
    {base.map((baseItem, index) => {
      return(
        <TravelCard 
          index={index} 
          key={baseItem.id} 

          rating={baseItem.rating}
          backImg={baseItem.backImg}
          stars={baseItem.stars}

          hotel={baseItem.hotel}  
          city={baseItem.city} 
          seaMeters={baseItem.seaMeters} 
          beachType={baseItem.beachType} 
          wifiType={baseItem.wifiType}
          price={baseItem.price}
        />
      )
    })}
  </div>
  );
};

export const example = () => <Test />