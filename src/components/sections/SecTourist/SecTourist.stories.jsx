import React from 'react';
import { SecTourist } from './SecTourist'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'SecTourist',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <SecTourist />
  );
};

export const example = () => <Test />