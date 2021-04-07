import React from 'react';
import { usePosition } from '../../modals/usePosition/usePosition'

export const UsePositionDemo = () => {
  const { latitude, longitude, error } = usePosition();

  return (
    <>
      latitude: {latitude},
      longitude: {longitude},
      error: {error}
    </>
  );
};