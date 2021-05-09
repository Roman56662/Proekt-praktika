import React, { useCallback, useMemo, useState } from 'react';
import { SecAboutHotel } from './SecAboutHotel';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecAboutHotel',
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
    <SecAboutHotel />
  );
};

export const example = () => <Test />