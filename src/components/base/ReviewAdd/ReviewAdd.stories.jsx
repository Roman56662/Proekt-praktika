import React, { useCallback, useMemo, useState } from 'react';
import { ReviewAdd } from './ReviewAdd';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'ReviewAdd',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  

  return (
    <div>
      <ReviewAdd />
    </div>
  );
};

export const example = () => <Test />