import React from 'react';
import { Home } from './Home'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Home',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <Home />
  );
};

export const example = () => <Test />