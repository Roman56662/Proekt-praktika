import React from 'react';
import { Booking } from './Booking'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Booking',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <Booking />
  );
};

export const example = () => <Test />