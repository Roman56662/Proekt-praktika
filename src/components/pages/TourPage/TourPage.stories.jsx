import React from 'react';
import { TourPage } from './TourPage'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'TourPage',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <TourPage />
  );
};

export const example = () => <Test />