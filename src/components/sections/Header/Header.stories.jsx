import React from 'react';
import {Header} from './Header'
import { withKnobs } from '@storybook/addon-knobs';


export default {
  title: 'Header',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};




const Test = () => {

  
  const base = [
    {
      user: 'Alex',
      date: '05.03.2021',
      figure: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo?'
    },
    {
      user: 'Sam',
      date: '06.04.2021',
      figure: 5,
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, reiciendis consequuntur accusantium architecto debitis, neque fugiat vitae commodi quis temporibus officia adipisci unde cumque ad facilis sunt voluptates molestiae impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo'
    },
    {
      user: 'Linda',
      date: '07.04.2021',
      figure: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sit nam voluptas ullam illo aperiam ab accusamus optio inventore adipisci mollitia quis doloribus eligendi itaque, dolorum cumque dicta quo enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus facilis, quam hic, repellat ipsa adipisci odio blanditiis nisi, error ut ipsam ipsum maiores totam doloremque impedit velit quas similique explicabo'
    },
  ]

  return (
    <Header />
  );
};

export const example = () => <Test />