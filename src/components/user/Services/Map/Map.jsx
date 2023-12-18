import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Map.css"
const Map = () => {
  const position = [33.510414 ,36.278336]
  return (
    <div className='bg-red-200 w-full ml-16'>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  )
}

export default Map
