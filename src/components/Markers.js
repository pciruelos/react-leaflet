import React from "react";
import { Marker } from "react-leaflet";
import { Iconlocation } from "./Iconlocation";


const Markers = (props) => {
    const { data } = props;
    console.log(data);
  const markers = data.map((lugar, i) => (
    <Marker key={i} icon={Iconlocation} position={lugar.geo} />
  ));
  return markers;
};

export default Markers;
