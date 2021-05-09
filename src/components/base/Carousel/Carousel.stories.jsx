import React, { useCallback, useMemo, useState } from 'react';
import { Carousel } from './Carousel';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'Carousel',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  
  const base = [
    {
      id: 1,
      image: 'https://cdn.wallpapersafari.com/50/85/qLFYxH.jpg'
    },
    {
      id: 2,
      image: 'https://i.artfile.ru/2048x1093_1071593_[www.ArtFile.ru].jpg'
    },
    {
      id: 3,
      image: 'https://www.expedea.ru/wp-content/uploads/2020/03/%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F-5-768x505.jpg'
    },
  ]

  return (
    <Carousel
      base={base}
    />
  );
};

export const example = () => <Test />