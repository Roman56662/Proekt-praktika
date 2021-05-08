import React from 'react';
import { SecPopular } from './SecPopular'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'SecPopular',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {


  return (
    <SecPopular />
  );
};

export const example = () => <Test />