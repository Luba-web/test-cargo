/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
};
