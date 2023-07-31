const getPolyline = async (points) => {
  try {
    const pointsStr = points.map((i) => i.slice().reverse()).join(';');
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${pointsStr}?steps=true&geometries=geojson`
    );
    if (response.ok) {
      let json = await response.json();
      let res = json.routes[0].geometry.coordinates.map((i) =>
        i.slice().reverse()
      );
      return res;
    }
    throw Error(response.statusText);
  } catch (error) {
    console.log(error);
  }
};

export default getPolyline;
