import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarDashbord from './NavBar_Dashbord/NavBarDashbord'
import SideBardashbord  from './SideBar_Dashbord/SideBardashbord'
import Test from './SideBar_Dashbord/Test'

const DashbordLayout = () => {
  return (
    <>
    <div className='flex '>
    <Test/>
      <div className='w-[80%]'>
      <NavBarDashbord/>
      <Outlet/>
      ,,

       
      </div>
    </div>

    
    </>
  )
}

export default DashbordLayout
