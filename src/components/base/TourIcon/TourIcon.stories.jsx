import React, { useState, useCallback } from 'react';
import { TourIcon } from './TourIcon';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'TourIcon',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const Test = () => {

  const base = [
    {
      title: 'Посмотреть туры',
      image: 'https://psv4.userapi.com/c505536/u173154522/docs/d35/99329b8f0312/car.png?extra=Lss-usxRxp7tXwtTxaP2qWrL0eIDKVvXbtJWUqluEEvlW5UZWEajiHIonvlcl7BxmlYoTr6djasG-i0bbNSPRBTuwOlUB6U7qqwAhTk0weOBF3UeHOVWijLEe90EI_9pkD9IKCH4SO_48c5As7HqYtvJZg'
    },
    {
      title: 'Об отеле',
      image: 'https://psv4.userapi.com/c534536/u173154522/docs/d38/024dc0d841ed/hotel.png?extra=iI9KHSPbIDDAEw_DrSnF-8_1NxbRU734O0VEfpzajFg0ZZR091QkvWYz47cfEtE484h7ySmTzDF32jrwezuF4_dKzQlSkmbnygq_ioDpWq9BcDKvX71_QvWs2CkODIaJ-EFHbCiDuiFvt4SE8i3NhHcUhw'
    },
    {
      title: 'Фотографии',
      image: 'https://psv4.userapi.com/c534536/u173154522/docs/d47/0f5d6329c739/camera.png?extra=x6_PjyPuwHAMoIFy9aSbUDapN3JZ7_Q8G3TQExQTHSVyD450IaOd5hBjlQBsGIp6KC2b3c1xCc88VuS45_HJw_ItNDXSaE5WU-akGO4cfouz99IxERq9MYKGD1nyld6X_XGp74glJlvIoheXOT33Th4K-Q'
    },
    {
      title: 'Отзывы',
      image: 'https://psv4.userapi.com/c534536/u173154522/docs/d30/0a62fa7cf521/comment.png?extra=-Jruq2YU311JSPntW-gkGh0h0d1AKpwx-wtenOv0MvcHMH_E12UaJx-6QZi5mdMzds5o6LI_wHe-3VXTT-5Rhno6NUgzwGrGQE3GzmHqpbxA1mKctqnrUOfRIPyyxQfn3hZs9FyM3bllwlxk1AD2nHC2fg'
    },
  ]
  
  return (    
    <div className='test'>
      {base.map((baseItem, index) => {
        return(
          <TourIcon 
          title={baseItem.title}
          image={baseItem.image}
          />
        )
      })}
  </div>
  )
}

export const example = () => <Test />