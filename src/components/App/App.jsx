import { Layout } from 'antd';
import { Info } from '../Info/Info';
import { Map } from '../Map/Map';

import './App.css';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { polylineActions } from '../../store/polylineSlice';
import { cargoRoute } from '../../utils/constants';

export function App() {
  const dispatch = useDispatch();

  const [active, setActive] = useState(1);
  const [cargoPoint, setCargoPoint] = useState(cargoRoute[0].points);

  const polyline = useSelector((state) => state.polyline.data);

  useEffect(() => {
    dispatch(polylineActions.getPolylineFetch(cargoPoint));
  }, [cargoPoint]);

  const handleRouteClick = (id) => {
    const arrPoint = cargoRoute
      .filter((item) => item.id === id)
      .map((i) => i.points)
      .flat();
    setCargoPoint(arrPoint);
    setActive(id);
  };

  return (
    <Layout>
      <Sider className="container">
        <Info
          cargoRoute={cargoRoute}
          handleRouteClick={handleRouteClick}
          active={active}
        />
      </Sider>
      <Content>
        <Map cargoPoint={cargoPoint} polyline={polyline} />
      </Content>
    </Layout>
  );
}
