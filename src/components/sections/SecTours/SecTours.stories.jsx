import React from 'react';
import { SecTours } from './SecTours'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'SecTours',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <SecTours />
  );
};

export const example = () => <Test />