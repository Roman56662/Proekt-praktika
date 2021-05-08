import React from 'react';
import { Footer } from './Footer'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Footer',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <Footer />
  );
};

export const example = () => <Test />