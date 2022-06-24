import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import datos from "../assets/data.json";
import Markers from './Markers'

import {useLocation,useNavigate} from 'react-router-dom'

import 'leaflet/dist/leaflet.css'



const Mapview = (props) => {
  
  const [state, setState] = useState({
    currentLocation: { lat:55.67, lng:12.52 },
    zoom:13
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    
    if ( location.state.latitude && location.state.longitude )
  {
    const currentLocation = { lat: location.state.latitude,
                              lng: location.state.longitude,
                              
                            } ;
  
    setState({...state, currentLocation});
    navigate({pathname: '/map', state:{ } })
                          };
  },[]);
  return (
    <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        <Markers data={datos.marihuaneros} />

        

    </MapContainer>
  )
}

export default Mapview