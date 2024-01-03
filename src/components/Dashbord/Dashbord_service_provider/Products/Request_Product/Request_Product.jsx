import React from 'react'
import Content from '../../../Dashbord_layout/Content/Content'
import Department from '../../../Dashbord_layout/Department/Department'
import { Outlet } from 'react-router-dom'

const Request_Product = () => {
  return (
    <Content
    path="Products /Request Product"
    
 
  >
  

  <div className='flex flex-wrap flex-col lg:flex-row  xl:gap-1  lg:gap-4 justify-between items-center xl:items-start gap-2 mt-3 '>
  <div className='flex flex-col flex-wrap md:flex-row xl:gap-1  lg:w-[100%] xl:w-[100%] sm:w-[100%] xl:justify-between      w-full xl:h-[10rem]'>
  <Department  path="All_Request" title="All Request - 100" descrption="These requests are sent by people who would like to book an appointment." className="xl:!w-[24%] !min-h-[5rem]"/>
    <Department path="Requests_Rejected" title="Requests Rejected - 10" descrption="All services for you (service providers - doctor (dental))" className="xl:!w-[24%] !min-h-[3rem]" />

    <Department path="Requests_accepted" title="Requests accepted - 50" descrption="All product for you (service providers - doctor(dental))" className="xl:!w-[24%] !min-h-[3rem]" />
    <Department path="Last_Request" title="Last Request - 40" descrption="All product for you (service providers - doctor(dental))" className="xl:!w-[24%] !min-h-[3rem]"/>

  </div>
 
    <Outlet />
   
  
  </div>
 

    </Content>
  )
}

export default Request_Product
