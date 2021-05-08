import React from 'react';
import { SecFilter } from './SecFilter'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'SecFilter',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <SecFilter />
  );
};

export const example = () => <Test />