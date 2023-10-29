import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarDashbord from './NavBar_Dashbord/NavBarDashbord'
import SideBardashbord  from './SideBar_Dashbord/SideBardashbord'
import Test from './SideBar_Dashbord/Test'

const DashbordLayout = () => {
  return (
    <>

       <div className=" ">
      <NavBarDashbord/>

        
       <div className="  flex">
      {/* <SideBardashbord/> */}
      <Test/>

       
        <div style={{width:"80%"}} className='bg-myGray-100'>
            ,,,,,,
        <Outlet/>
        </div>
       </div>
        </div>
    </>
  )
}

export default DashbordLayout
