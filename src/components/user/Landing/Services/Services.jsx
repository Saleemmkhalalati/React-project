import React from 'react'
import { styles } from '../Stayles'
import { useTranslation } from "react-i18next";
import Dental from './Services_images/Dental.svg'
import Neurology from './Services_images/Neurology.svg'
import serviceImage from './Services_images/Doctor_services.png'
import BackPolygon from "../../../utilities/BackPolygon"
import Typography from '../../../utilities/Typography'


const Services = () => {
    const { t } = useTranslation("global");

    return (
        <section className={`services_section relative overflow-hidden    sm:px-16 px-6 sm:py-16 py-16   `}>
        
          

            
               <div className='absolute   left-[-100px]  lg:top-[20%] md:top-[60%] md:right-[60%] top-[20%] rtl:lg:right-[-50px]  hidden lg:block'>
                <BackPolygon />
            </div>
            {/* services content + services image */}
            <div className={`flex flex-col lg:flex-row ${styles.padding} text-left  items-center   mt-10 justify-between gap-10`}>
                <div className="services_content lg:w-[30%] rtl:text-right ">
                    <Typography component={"h1"} className={`mb-5`}>{t("Services.main-title")}</Typography>
                    <Typography component={"p"} >{t("Services.discrption")}</Typography>
                </div>
                <div className="services_images  relative h-full   lg:w-[60%] flex flex-wrap mt-10 md:flex-row items-center gap-7">
                    {/* service 1 */}


                



                    <div className={`rotate-45   grident  p-[3px]   w-[120px] h-[120px] md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[16px] relative lg:top-1/2 `}>
                        <div  className="bg-myGray-100  relative  w-full h-full">
                            <div style={{backgroundImage:`url(${Dental})`}} className='bg-no-repeat bg-center z-10 w-[70px] h-[80px]    lg:w-[100px] lg:h-[100px] rotate-[-45deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] '>
                            <Typography component={"gradient-text"} className=' lg:text-[20px] font-bold absolute lg:bottom-[-30px] bottom-[-25px]  text-[16px]'>{t("Services.services.0")}</Typography>
                            </div>
                           

                        </div>
                    </div>
                    {/* rservice 2*/}
                    <div className={` grident inline-block  grident p-[3px] rotate-45   md:mt-10  w-[120px] h-[120px]  md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[16px] relative lg:top-1/2 top-[20%]  `}>
                        <div className="bg-myGray-100 relative w-full h-full">
                        <div style={{backgroundImage:`url(${Neurology})`}} className='bg-no-repeat bg-center z-10 lg:w-[100px] lg:h-[100px] w-[70px] h-[70px]    rotate-[-45deg]  flex items-center justify-center absolute top-[40%] left-[40%] md:top-1/2 md:left-1/2 translate-y-[-50%] translate-x-[-50%] '>
                        <Typography component={"gradient-text"}className=' lg:text-[20px] font-bold absolute lg:bottom-[-30px] bottom-[-25px]  text-[16px] '>{t("Services.services.1")}</Typography>
</div>

                        </div>
                    </div>
                    {/* service 3 */}
   
                    <div className={`p-[2px] grident inline-block  grident  rotate-45    w-[120px] h-[120px]  md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[16px] relative lg:top-1/2  top-[20%] overflow-hidden `}>
                       
                       
                       
                        <div className="grident  opacity-[70%] w-full  h-full relative   ">
                        <div style={{backgroundImage:`url(${serviceImage})`}} className={` rotate-[-45deg] absolute right-2   lg:right-8 lg:bottom-[-20px]  img-landing-page bg-no-repeat bg-cover bg-center lg:w-[150px] lg:h-[250px] md:w-[150px] md:h-[230px] w-[100px] h-[150px]  `} >
                        <Typography component={"p"} className='text-white z-30 font-extrabold  text-[16px]  absolute lg:bottom-10  lg:left-[50px] bottom-4  left-[30px] font-bold md:bottom-12'>{t("Services.services.2")}</Typography>
      </div>
                           
                     
                        


                        </div>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default Services
