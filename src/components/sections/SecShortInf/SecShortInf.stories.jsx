import React, { useCallback, useMemo, useState } from 'react';
import { SecShortInf } from './SecShortInf';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecShortInf',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  return (
    <SecShortInf 
      
    />
  );
};

export const example = () => <Test />