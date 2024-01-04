import React from 'react'
import Map from '../Map/Map'

const ChoselocationMap = () => {
  const position = [33.510414, 36.278336];

  return (
    <>
      <Map position={position} className=" mt-10 md:mt-16 lg:mt-36 ltr:sm:ml-16 rtl:sm:mr-16"/>
    </>
  )
}

export default ChoselocationMap
