import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "./Map.css"
import Typography from '../../../utilities/Typography'
import { useTranslation } from "react-i18next";
const Map = () => {
  const { t } = useTranslation("global");
  const position = [33.510414 ,36.278336]
  return (
    <div className=' mt-10 md:mt-16 lg:mt-36 ltr:sm:ml-16 rtl:sm:mr-16 '>
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='rounded-xl w-full'>
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
<Typography component="h4" className="sm:w-[70%] w-[15rem]  mx-auto mt-10 text-center">
{t("services_map.0")}
</Typography>
    </div>
  )
}

export default Map
