import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarDashbord from './NavBar_Dashbord/NavBarDashbord'
import SideBardashbord  from './SideBar_Dashbord/SideBardashbord'


const DashbordLayout = () => {
  return (
    <>
    <div className='flex '>
    <SideBardashbord/>
      <div className='w-[80%]'>
      <NavBarDashbord/>
      <div className='bg-myGray-100 h-screen'>
       
      <Outlet/>
      </div>
      

       
      </div>
    </div>

    
    </>
  )
}

export default DashbordLayout
