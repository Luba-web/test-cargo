const getPolyline = async (points) => {
  try {
    const pointsStr = points.map((i) => i.slice().reverse()).join(';');
    // console.log('pointsStr', pointsStr);
    const response = await fetch(
      `http://router.project-osrm.org/route/v1/driving/${pointsStr}?steps=true&geometries=geojson`
    );
    if (response.ok) {
      let json = await response.json();
      let res = json.routes[0].geometry.coordinates.map((i) =>
        i.slice().reverse()
      );
      // console.log('res', res);
      return res;
    }
    throw Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
};
export default getPolyline;
// export const getRouterApi = () => {
//   // запрос за маршрутами
// };
