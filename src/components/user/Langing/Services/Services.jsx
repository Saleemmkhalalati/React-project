import React from 'react'
import { styles } from '../Stayles'
import Dental from './Services_images/Dental.svg'
import Neurology from './Services_images/Neurology.svg'
import serviceImage from './Services_images/Doctor_services.png'

const Services = () => {
    return (
        <section className={`services_section    ${styles.paddingY}`}>
            <div className={`${styles.Rectangle}  absolute  left-[-100px] md:left-[-70px] rtl:lg:right-[-10px] `}>

            </div>
            {/* services content + services image */}
            <div className={`flex flex-col lg:flex-row ${styles.padding} text-left  justify-between gap-10`}>
                <div className="services_content lg:w-[30%]  ">
                    <h1 className={`${styles.heroHeadText}`}>Our Services </h1>
                    <p className={`${styles.heroSubText} `}>We seek the best ways for your comfort, so we tried to put in your hands our best services in a smooth and comfortable manner.</p>
                </div>
                <div className="services_images  relative h-full   lg:w-[60%] flex flex-wrap mt-10 md:flex-row items-center gap-7">
                    {/* service 1 */}
                    <div className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[140px] h-[140px] md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[5px] relative lg:top-1/2 `}>
                        <div  className="bg-myGray-100  relative  w-full h-full">
                            <div style={{backgroundImage:`url(${Dental})`}} className='bg-no-repeat bg-center z-10 w-[70px] h-[60px]  lg:w-[100px] lg:h-[100px] rotate-[-45deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] '>
                            <p className=' lg:text-[20px] font-bold absolute lg:bottom-[-30px] bottom-[-25px]  text-[16px]'>Dental</p>
                            </div>
                           

                        </div>
                    </div>
                    {/* rservice 2*/}
                    <div className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[140px] h-[140px]  md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[5px] relative lg:top-1/2 top-[20%]  `}>
                        <div className="bg-myGray-100 relative w-full h-full">
                        <div style={{backgroundImage:`url(${Neurology})`}} className='bg-no-repeat bg-center z-10 lg:w-[100px] lg:h-[100px] w-[70px] h-[60px] rotate-[-45deg]  flex items-center justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] '>
                        <p className=' lg:text-[20px] font-bold absolute lg:bottom-[-30px] bottom-[-25px]  text-[16px] '>Neurology</p>
</div>

                        </div>
                    </div>
                    {/* service 3 */}
   
                    <div className={`${styles.border_graident}  ${styles.Rectangle_border} flex  w-[140px] h-[140px]  md:w-[180px] md:h-[180px]  lg:w-[220px] lg:h-[220px] rounded-[5px] relative lg:top-1/2  top-[20%] overflow-hidden `}>
                       
                       
                       
                        <div className="grident  opacity-[70%] w-full h-full relative   ">
                        <div style={{backgroundImage:`url(${serviceImage})`}} className={` rotate-[-45deg] absolute right-2   lg:right-8 lg:bottom-[-20px]  img-landing-page bg-no-repeat bg-cover bg-center lg:w-[150px] lg:h-[250px] md:w-[150px] md:h-[220px] w-[100px] h-[150px]  `} >
                        <p className='text-white lg:text-[14px] text-[13px] font-bold absolute lg:bottom-10  lg:left-[50px] bottom-4  left-[30px] '>See more services</p>
      </div>
                           
                     
                        


                        </div>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default Services
