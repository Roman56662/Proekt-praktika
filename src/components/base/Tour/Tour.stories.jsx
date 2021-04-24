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
      countNights: 6,
      live: 1,
      nutrition: 'Только завтрак',
      fly: 1,
      transfer: 1,
      health: 1,
      roomPlace: '3-х мест.',
      roomType: 'люкс'
    },
    {
      date: '25',
      month: 'апр',
      countNights: 4,
      live: 1,
      nutrition: ' ',
      fly: 0,
      transfer: 0,
      health: 0,
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    },
    {
      date: '25',
      month: 'апр',
      countNights: 3,
      live: 1,
      nutrition: ' ',
      fly: 1,
      transfer: 1,
      health: 0,
      roomPlace: '2-х мест.',
      roomType: 'стандарт'
    },
    {
      date: '27',
      month: 'апр',
      countNights: 2,
      live: 1,
      nutrition: ' ',
      fly: 1,
      transfer: 1,
      health: 1,
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
            live={baseItem.live}
            nutrition={baseItem.nutrition}
            fly={baseItem.fly}
            transfer={baseItem.transfer}
            health={baseItem.health}
          />
        )
      })
    }
</div>
    
  );
};

export const example = () => <Test />