import React from 'react'
import DocterImage from './Get_App_images/Intersect.png'
import Typography from "../../../utilities/Typography"
import { useTranslation } from "react-i18next";
import Polygon from "../../../utilities/Polygon"


const GetApp = () => {
  const { t } = useTranslation("global");

  return (
    <section className={`GetApp_section   overflow-hidden sm:px-16 px-6 sm:py-16 py-10 relative   flex justify-end `}>
      {/* polygon image  */}
 <div className='relative   start-[10%]  top-3 z-50 hidden lg:block'>
 <Polygon color={"gray"} className={" w-[20rem] h-[20rem] rtl:rotate-45"}>
      <img
            className=" w-[23rem] h-[23rem] ltr:-start-10  translate-x-7 translate-y-[-18px]  rotate-[-45deg]  hidden lg:block"
            src={DocterImage}
            alt="img"
          />


      </Polygon>
 </div>

      {/* border graident */}

      <div className='relative start-[-20%] hidden lg:block'>
      <Polygon color={"gradient"} className={"w-[20rem] h-[20rem] hidden lg:block"}>
      <Polygon color={"white"} className={"w-[19.5rem] h-[19.5rem] start-[4px] top-[5px] "}>

      </Polygon>


      </Polygon>
      </div>




      <div className='flex items-center justify-center flex-col md:flex-row  gap-0  '>


        {/* get app content */}

        <div className='content  flex flex-col  relative p-10  lg:w-[1127px] lg:h-[360px]   bg-[#2bc1f70d]     justify-center items-center text-center      '>

          <Typography component={"h1"} className={` z-10 opacity-100 mb-5   `}>{t("get_app.main_title")} </Typography>
          <Typography component={"p"}  >{t("get_app.descrption")}</Typography>
          <button className='rounded-[5px] grident w-[177px] h-[31px] py-[3px] px-[8px] opacity-[.8px] text-white mt-5 z bg-gradient-to-b from-secondary to-primary'>{t("get_app.button")}</button>

          <div className='relative start-[40%] hidden lg:block'>
      <Polygon color={"gradient"} className={"w-[3rem] h-[3rem] hidden lg:block"}>
      <Polygon color={"white"} className={"w-[2.5rem] h-[2.5rem] start-[4px] top-[4px] "}>

      </Polygon>


      </Polygon>
      </div>

      
      <div className='relative start-[-40%] top-[-70%] hidden lg:block'>
      <Polygon color={"gradient"} className={"w-[3rem] h-[3rem] hidden lg:block"}>
      <Polygon color={"white"} className={"w-[2.5rem] h-[2.5rem] start-[4px] top-[4px] "}>

      </Polygon>


      </Polygon>
      </div>


        

         

        </div>

      </div>

    </section>
  )
}






export default GetApp
