import React, { useCallback, useMemo, useState } from 'react';
import { SecSlide } from './SecSlide';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecSlide',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  

  return (
    <SecSlide 
      
    />
  );
};

export const example = () => <Test />