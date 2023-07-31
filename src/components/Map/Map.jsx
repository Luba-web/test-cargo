/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

import { RecenterAutomatically } from '../RecenterAutomatically/RecenterAutomatically';
import { useSelector } from 'react-redux';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';

export const Map = ({ cargoPoint, polyline }) => {
  const loading = useSelector((state) => state.polyline.loading);
  const error = useSelector((state) => state.polyline.error);

  const letPoint = cargoPoint[0][0];
  const lngPoint = cargoPoint[0][1];

  const customIcon = new Icon({
    iconUrl:
      'https://www.clipartmax.com/png/full/471-4711868_toner-will-arrive-approximately-one-week-before-it-vector-delivery-truck-icon.png',
    iconSize: [38, 30],
  });

  const drewMarker = useCallback(() => {
    return cargoPoint.map((value, index) => {
      return <Marker position={value} icon={customIcon} key={index}></Marker>;
    });
  }, [cargoPoint]);

  return (
    <>
      {error ? <Error message={error} /> : null}
      {loading ? (
        <Loader />
      ) : (
        <MapContainer center={[letPoint, lngPoint]} zoom={11} className="map">
          <TileLayer
            attribution='amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cargoPoint && drewMarker()}
          <RecenterAutomatically lat={letPoint} lng={lngPoint} />

          <Polyline
            color={'red'}
            opacity={0.7}
            weight={8}
            positions={polyline}
          />
        </MapContainer>
      )}
    </>
  );
};
