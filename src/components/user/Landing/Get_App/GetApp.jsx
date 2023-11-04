import React from 'react'
import { styles } from '../Stayles'
import DocterImage from './Get_App_images/Intersect.png'
import Typography from "../../../utilities/Typography"

const GetApp = () => {
  return (
    <section className={`GetApp_section   overflow-hidden ${styles.padding} relative   flex justify-end `}>
      {/* border graident */}
      <div className="relative start-64  top-3 z-10  lg:left-[130px] hidden lg:block   rtl:lg:right-36 rtl:lg:rotate-[90deg]">
        <div className=" relative w-[350px] h-[350px] bg-gray-100 origin-center  ltr:rotate-45 rtl:-rotate-45 rounded-xl ">
          <img
            className=" w-[25rem] h-[25rem] ltr:-start-10  translate-x-7 translate-y-[-20px]  rotate-[-45deg]  hidden lg:block"
            src={DocterImage}
            alt="img"
          />
        </div>
      </div>

      {/* rectangle image */}
      <div className=" absolute start-44 top-16  lg:left-[0px]  hidden lg:block rtl:lg:right-0 ">
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-b from-primary to-secondary rounded-2xl  ltr:rotate-45 rtl:-rotate-45"></div>
        <div className="absolute w-[290px] h-[290px] bg-white start-[4px] top-[4px] rounded-xl ltr:rotate-45 rtl:-rotate-45"></div>
      </div>




      <div className='flex items-center justify-center flex-col md:flex-row  gap-0  '>


        {/* get app content */}

        <div className='content  flex flex-col  relative p-10  lg:w-[1127px] lg:h-[360px]   bg-[#2bc1f70d]     justify-center items-center text-center      '>

          <Typography component={"h1"} className={` z-10 opacity-100 mb-5   `}>Let ‘s Strive For a More happy Life With Med - Sal </Typography>
          <Typography component={"p"}  >This is achieved through access to your treatment and service faster and smoother than before.</Typography>
          <button className='rounded-[5px] grident w-[177px] h-[31px] py-[3px] px-[8px] opacity-[.8px] text-white mt-5 '>So, Let’s Started</button>

          <div className=" absolute start-44 top-10  left-28 rtl:right-[90%]   hidden lg:block">
            <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-primary to-secondary rounded-md  ltr:rotate-45 rtl:-rotate-45"></div>
            <div className="absolute w-[30px] h-[30px] bg-white start-[4px] top-[4px] rounded-md ltr:rotate-45 rtl:-rotate-45"></div>
          </div>

          <div className=" absolute start-44 bottom-20  lg:left-[90%]   hidden lg:block">
            <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-primary to-secondary rounded-md  ltr:rotate-45 rtl:-rotate-45"></div>
            <div className="absolute w-[30px] h-[30px] bg-white start-[4px] top-[4px] rounded-md ltr:rotate-45 rtl:-rotate-45"></div>
          </div>

        </div>

      </div>

    </section>
  )
}






export default GetApp
