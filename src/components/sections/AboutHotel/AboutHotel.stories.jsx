import React, { useCallback, useMemo, useState } from 'react';
import { AboutHotel } from './AboutHotel';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'AboutHotel',
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
    <AboutHotel />
  );
};

export const example = () => <Test />