import React, { useState, useCallback } from 'react';
import { Logo } from './Logo';
import { LogoTitle } from './LogoTitle';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Logo',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const Test = () => {

  
  return (    
    <div>
      <Logo  />
      <LogoTitle  />
    </div>
    
  )
}

export const example = () => <Test />