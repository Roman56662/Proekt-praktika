import React, { useCallback, useMemo, useState } from 'react';
import { SecAboutTours } from './SecAboutTours';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecAboutTours',
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
    <SecAboutTours 
      
    />
  );
};

export const example = () => <Test />