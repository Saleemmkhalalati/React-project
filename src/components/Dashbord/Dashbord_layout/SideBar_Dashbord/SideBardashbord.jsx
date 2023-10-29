import React from 'react'
// import Button from "../../utilities/Button"
import { Link, NavLink } from 'react-router-dom'
import vector from "./SideBar_Dashbord_images/Vector.svg"



const SideBardashbord = () => {
  const TabList=[
    {
      id:1,
      name:"All Users",
      isNotifiTab:true,
      icon:vector,
      notifiNumber:6,
      notifiColor:"#eeee",
      subItems:[
        {
        id:2,
        subName:"service provider",
        notifinumber:2

      },
      {
        id:2,
        subName:"service provider",
        notifinumber:2

      },
      {
        id:2,
        subName:"service provider",
        notifinumber:2

      }

      ]
    }
  ]
  return (
   <div className=' red h-screen w-[20%] px-5 py-5 '>
    <div className='flex px-5 py-2 items-center gap-5 grident rounded-[8px]'> 
        <img src={vector} alt="" />
        <p className='text-white'>Dashboard</p>
    </div>
  
    <p className='text-[16px] font-normal leading-[25px] text-myGray-100'>About Users</p>
    <ul>
        <li>
       
          <img src="" alt="" />
      <NavLink  to='/dashbord/users' className='item-link'>Users</NavLink>

          
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    

    </div>
  )
}

export default SideBardashbord
//styleName: Text - 4/Paragraph Text;

