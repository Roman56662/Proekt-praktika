import React, { useCallback, useMemo, useState } from 'react';
import { AboutTours } from './AboutTours';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'AboutTours',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  
  const base = [
    
  ]

  return (
    <AboutTours 
      
    />
  );
};

export const example = () => <Test />