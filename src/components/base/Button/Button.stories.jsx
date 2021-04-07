import React from 'react';
import { Button } from './Button';
import { withKnobs, text, object, radios } from '@storybook/addon-knobs';


export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const theme = {
  primari: 'primary',
  custom: 'custom',
  button_yellow: '_button_yellow travel-card__button'
}
  

export const Primary = () => (
  <Button link='' title={text('Label', 'Primary')} theme={radios('theme', theme, theme.primari)}></Button>
)



const Test = () => {

  return (
    <Button ></Button>
  );
};

export const example = () => <Test />