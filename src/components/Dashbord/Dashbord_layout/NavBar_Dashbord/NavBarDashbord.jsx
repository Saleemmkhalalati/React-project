import React from 'react'
import Logo from "../../../utilities/Logo";
import searchIcon from "./NavBar_Dashbord_images/Search.svg"
import Avtar from "./NavBar_Dashbord_images/Avtar.png"
import Notification from "./NavBar_Dashbord_images/Notification.svg"
import Setting from "./NavBar_Dashbord_images/Setting.svg"
import MultiLangDropdown from "../../../utilities/MultiLangDropdown";




const NavBarDashbord = () => {
  return (
    <div className='py-5 px-10  flex  justify-between'>
      
      <Logo/>

      
        {/* input serch  */}
        <div className='relative w-1/2 '>
          
           
                    <input
                            id="search"
                            placeholder="Search ..."
                            className=" py-[6px] px-[16px] w-full border-[1px] red border-myGray-400 focus-within:border-primary  rounded-md transition-all duration-100 ease-in-out  border-e-0  bg-myGray-200  rounded-s-md outline-0 placeholder:focus:opacity-0"
                        />
                 
             
                <img src={searchIcon} width={12} height={12} alt="icon"  className='absolute right-4 top-3'/>
            
        </div>
        {/* icon +profile photo  */}
        
        <div className='flex justify-between items-center gap-4 '>
          <div className=' relative p-2 '>
            <img src={Notification} alt="" className='w-5 h-5' />
            <div className='w-2 h-2 absolute bg-red-600 rounded-full top-0 right-1'></div>
          </div>
          <img src={Setting} alt="" className='w-5 h-5' />
          <MultiLangDropdown/>
         <img src={Avtar} alt="" />
          

        </div>
        
      
        
    </div>
  )
}

export default NavBarDashbord

