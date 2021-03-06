import React from 'react';
import DropDownTravel from './DropDownTravel';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


export default {
  title: '/DropDownTravel',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  const regions = (
    [
      {
        id: 1,
        title: 'Турция',
        price: ' от 36 524 ₽',
        popular: true
      },
      {
        id: 2,
        title: 'Россия',
        price: ' от 51 085 ₽',
        popular: true
      },
      {
        id: 3,
        title: 'Доминикана',
        price: ' от 106 741 ₽',
        popular: false
      }
    ]
  )

  return (
    <DropDownTravel arr={regions} />
  );
};

export const example = () => <Test />