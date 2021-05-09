import React, { useCallback, useMemo, useState } from 'react';
import { SecChooseTour } from './SecChooseTour';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecChooseTour',
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
    <SecChooseTour 
      
    />
  );
};

export const example = () => <Test />