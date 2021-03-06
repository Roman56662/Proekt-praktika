import React, { useState, useCallback } from 'react';
import {Humans} from './Humans';
// import { CardDocs } from './docs/Card.docs';

import { withKnobs, number } from '@storybook/addon-knobs';

export default {
  title: 'Humans',
  decorators: [withKnobs],
  parameters: {
    docs: {
    },
  },
};


const HumansCounter = () => {
  const [countParents, setCountParents] = useState(1)
  const [countChildrens, setCountChildrens] = useState(1)
  const handleClickParents = useCallback((znakParents) => {
    if (znakParents === 'minusParents') {
      const resParents = countParents - 1;
      if (resParents > 0) {
        setCountParents(resParents)
      }
    } else {
      if (countParents<5) {
      const p = countParents + 1;
      setCountParents(p)
      }
    }
  }, [countParents])
  const handleClickChildrens = useCallback((znakChildrens) => {
    if (znakChildrens === 'minusChildren') {
      const resChildrens = countChildrens - 1;
      if (countChildrens > 0) {
        setCountChildrens(resChildrens)
      }
    } else {
      if (countChildrens<5) {
      const c = countChildrens + 1;
      setCountChildrens(c)
      }
    }
  }, [countChildrens])

  return (
    <Humans countParents={countParents} countChildrens={countChildrens} onClick={handleClickChildrens} onClickParents={handleClickParents}/>
  );
};

export const example = () => <HumansCounter/>


