import React from 'react'
import Content from "../../Dashbord_layout/Content/Content";
import { Outlet } from 'react-router-dom';
import Department from "../../Dashbord_layout/Department/Department"

const Report  = () => {
  return (
    <Content
    path={" Report"}
    
 
  >
  

  <div className='flex flex-wrap flex-col lg:flex-row  xl:gap-1  lg:gap-4 justify-between items-center xl:items-start gap-2 mt-3 '>
  <div className='flex flex-col flex-wrap md:flex-row xl:gap-5  lg:w-[68%] xl:w-[77%] sm:w-[100%]    gap-5 xl:justify-between lg:justify-around sm:justify-center sm:items-center  w-full xl:h-[10rem]'>
  <Department  path="all_users" title="All Users - 100.000" descrption="All users (supper admin, admin, service provider, patient)"/>
    <Department path="all_services" title="All Services - 190.000" descrption="All services from (doctor, hospital, lab, clinic, pharmacy)"  />

    <Department path="all-product" title="All Product - 250.000" descrption="All product (medical drugs, medical devices, cosmetic ointments)" />
  </div>
 
    <Outlet />
  
  </div>
 

    </Content>
  )
}

export default Report 
