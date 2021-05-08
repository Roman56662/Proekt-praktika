import React from 'react';
import { Tours } from './Tours'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Tours',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <Tours />
  );
};

export const example = () => <Test />