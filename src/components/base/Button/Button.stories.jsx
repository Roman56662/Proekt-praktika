import React from 'react';
import { Button } from './Button';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'Button',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};

const styles = [
  {
    style: 'button button_primary button_transparent'
  },
  {
    style: 'button button_secondary button_gradient_radius-right'
  },
  {
    style: 'button button_third button_gradient-border'
  },
  {
    style: 'button button_fours button_gradient'
  }
]

export const Primary = () => (
  <Button title={text('Label', 'Primary')} style={styles[0].style}></Button>
)

export const Secondary = () => (
  <Button title={text('Label', 'Secondary')} style={styles[1].style}></Button>
)

export const Third = () => (
  <Button title={text('Label', 'Third')} style={styles[2].style}></Button>
)

export const Fours = () => (
  <Button title={text('Label', 'Fours')} style={styles[3].style}></Button>
)


const Test = () => {

  return (
    <Button ></Button>
  );
};

export const example = () => <Test />