import React from 'react';
import { Tour } from './Tour';
import { withKnobs, text, object } from '@storybook/addon-knobs';


export default {
  title: 'Tour',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  
  const base = [
    {
      date: '25',
      month: 'апр',
      countNights: 7,
      nutritions: 'Без питания',
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    }
  ]

  return (
    <div>
    {
      base.map((baseItem, index) => {
        return(
          <Tour 
            index={index} 

            date={baseItem.date}
            month={baseItem.month}
            countNights={baseItem.countNights}
            roomPlace={baseItem.roomPlace}
            roomType={baseItem.roomType}
          />
        )
      })
    }
</div>
    
  );
};

export const example = () => <Test />