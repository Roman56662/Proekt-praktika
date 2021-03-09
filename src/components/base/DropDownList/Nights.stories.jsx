import React, { useState, useCallback } from 'react';
import { Nights } from './Nights';
// import { CardDocs } from './docs/Card.docs';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Nights',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};


const NightsCounter = () => {
  const [count, setCount] = useState(1)
  const handleClick = useCallback((znak) => {
    if (znak === 'minus') {
      const res = count - 1;
      if (res > 0) {
        setCount(res)
      }
    } else {
      if (count<14) {
      const r = count + 1;
      setCount(r)
      }
    }
  }, [count])

  return (
    <Nights count={count} onClick={handleClick} />
  );
};

export const example = () => <NightsCounter/>