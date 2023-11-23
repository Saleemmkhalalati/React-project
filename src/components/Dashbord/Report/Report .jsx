import React from 'react'
import Content from "../Dashbord_layout/Content/Content";
import { Outlet } from 'react-router-dom';
import Department from "../Dashbord_layout/Department/Department"

const Report  = () => {
  return (
    <Content
    path={" Report"}
 
  >
    {/* <div className="fex">
    <div className='flex justify-between gap-10'>
  <div className='flex gap-5'>
  <Department  path="all_users"/>
    <Department path="all_services"/>

    <Department path="all-product"/>
  </div>

  


   
    
   </div>

    </div>
   
   <div className=' flex flex-wrap '>

  <Outlet />
  </div> */}

  <div className='flex flex-wrap justify-between mt-5'>
  <div className='flex gap-5 w-[75%] h-[10rem]'>
  <Department  path="all_users"/>
    <Department path="all_services"/>

    <Department path="all-product"/>
  </div>
 
    <Outlet />
  
  </div>
 

    </Content>
  )
}

export default Report 
