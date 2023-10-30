import React from 'react'
// import Button from "../../utilities/Button"
import { Link, NavLink } from 'react-router-dom'
import vector from "./SideBar_Dashbord_images/Vector.svg"
import Test from './Test'



const SideBardashbord = () => {
 
  return (
    <div className=" h-screen flex items-end justify-end red ">
        <button
      className="fixed lg:hidden z-90 bottom-10 right-8 bg-teal-800 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-teal-800   duration-300"
      onClick={toggleSidebar}
    >
      <span class="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-6 m-auto"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"
          />
        </svg>
      </span>
    </button>
    </div>
    
  //  <div className=' red h-screen w-[20%] px-5 py-5 '>
  //   <div className='flex px-5 py-2 items-center gap-5 grident rounded-[8px]'> 
  //       <img src={vector} alt="" />
  //       <p className='text-white'>Dashboard</p>
  //   </div>
  
  //   <p className='text-[16px] font-normal leading-[25px] text-myGray-100'>About Users</p>
  //   <ul>
  //       <li>
       
  //         <img src="" alt="" />
  //     <NavLink  to='/dashbord/users' className='item-link'>Users</NavLink>

          
  //       </li>
  //       <li></li>
  //       <li></li>
  //       <li></li>
  //       <li></li>
  //   </ul>
    

  //   </div>
  )
}

export default SideBardashbord
//styleName: Text - 4/Paragraph Text;

