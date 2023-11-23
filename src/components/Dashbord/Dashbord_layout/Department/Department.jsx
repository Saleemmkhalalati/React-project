import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Department.css"

const Department = ({path}) => {
  return (
<NavLink to={path} className="Department_box min-h-[10rem] bg-white p-6 rounded-md duration-150">
       
            <h1 className='font-bold text-[18px] text-myGray-500 leading-[25.14px] mb-3'>All Users - 100.000</h1>
            <p className='text-myGray-500  opacity-75'>All users (supper admin, admin, service provider, patient)</p>

      
</NavLink>
  )
}

export default Department

