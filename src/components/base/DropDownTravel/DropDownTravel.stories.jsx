import React from 'react';
<<<<<<< HEAD
import DropDownTravel from './DropDownTravel';
=======
import { DropDownTravel } from './DropDownTravel';
>>>>>>> dev1
import { withKnobs, text, boolean } from '@storybook/addon-knobs';


export default {
<<<<<<< HEAD
  title: '/DropDownTravel',
=======
  title: 'DropDownTravel',
>>>>>>> dev1
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