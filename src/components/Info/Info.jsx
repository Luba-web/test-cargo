/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

export function Info({ cargoRoute, handleRouteClick, active }) {
  const drawInfoRoute = useCallback(
    (cargoRoute) => {
      return cargoRoute.map((item) => (
        <Link
          to=""
          type="button"
          onClick={() => handleRouteClick(item.id)}
          key={item.id}
          className={active === item.id ? 'route-active route' : 'route'}
        >
          {item.title}
        </Link>
      ));
    },
    [cargoRoute, handleRouteClick, active]
  );

  return (
    <div className="info">
      <ul className="info-block">{cargoRoute && drawInfoRoute(cargoRoute)}</ul>
    </div>
  );
}
