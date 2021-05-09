import React, { useCallback, useMemo, useState } from 'react';
import { SecReviews } from './SecReviews';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'SecReviews',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  return (
    <SecReviews 
      
    />
  );
};

export const example = () => <Test />