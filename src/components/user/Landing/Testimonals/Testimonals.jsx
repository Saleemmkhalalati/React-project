import React, { useState } from 'react'
import { styles } from '../Stayles'
import { Outlet } from 'react-router-dom'
import testmonal_2 from './Testimonals_images/Testaimonals _1.png'
import testmonal_3 from './Testimonals_images/Testaimonals_2.png'
import testmonal_4 from './Testimonals_images/Testaimonals_3.png'
import testmonal_1 from './Testimonals_images/Testaimonals_4.png'



const Testimonals = () => {
    const [p1active,setp1active]=useState(1)
    const [p2active,setp2active]=useState(0)
    const [p3active,setp3active]=useState(0)
    const [p4active,setp4active]=useState(0)


    const showInfo=(devId)=> {
        console.log(devId)
       
        setp1active(devId)
    
      }
    return (
        <section className={`testimonals_section overflow-hidden   ${styles.padding}`}>
            <div className="flex flex-col lg:flex-row justify-around items-center ">
                <div className="testimonals_images  mt-20  ">
                    <div className=' '>
                        {/* testimonals 1+ 2 */}
                        <div className="flex   gap-9 md:gap-20 lg:gap-0 lg:justify-between cursor-pointer  ">

                            {/* t4 */}
                            <div onClick={() => {showInfo(4)}} className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[150px] lg:h-[150px] rounded-[5px]  `}>
                                <div className="bg-myGray-100 opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_4}`} alt="" className='rotate-[-45deg] w-full h-full absolute bottom-[-25px] left-5   ' />


                                </div>
                            </div>

                            {/* t2 */}
                            <div onClick={() => {showInfo(2)}} className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[150px] lg:h-[150px] rounded-[5px]  `}>
                                <div className="bg-myGray-100 opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_2}`} alt="" className='rotate-[-45deg] w-full h-full absolute bottom-[-20px] left-3   ' />


                                </div>
                            </div>
                        </div>
                        {/* testmonals 1+3 */}

                        <div className="flex  lg:gap-16 md:gap-20 rotate-[90deg]  gap-10 lg:translate-y-[-150px] translate-y-[-100px]  md:translate-y-[-180px] cursor-pointer   ">
                            {/* t1 */}
                            <div onClick={() => {showInfo(1)}} onclick="showInfo('testimonal1')" className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[150px] lg:h-[150px] rounded-[5px]  `}>
                                <div className="graident opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_1}`} alt="" className='rotate-[-140deg]   w-full h-full absolute bottom-[20px] left-5  ' />


                                </div>
                            </div>
                            {/* t3 */}

                            <div onClick={() => {showInfo(3)}} className={`${styles.border_graident}  ${styles.Rectangle_border}  w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[150px] lg:h-[150px] rounded-[5px]  `}>
                                <div className="bg-myGray-100 opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_3}`} alt="" className='rotate-[-130deg] w-full h-full absolute bottom-[10px]  right-[-20px]  ' />


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="testimonals_content md:mt-10  w-full flex flex-col text-left lg:w-1/2 ">
                    <h1 className={`${styles.heroHeadText} z-10  `}>What Our Clients Say</h1>

                    <p id="testimonal1" className={ `${p1active===1 ? "block" :"hidden"} testmonal  ${styles.heroSubText} `}>I've been using this site since it came out! I really like how simple and quick the services are, and I would love to have a discussion with you to explain why and how we provide the service. Thank you for the great work you do!</p>
                    <p id="testimonal2" className={` ${p1active===2 ? "block" :"hidden"} testmonal  ${styles.heroSubText} `}>I've been using this site since it came out! I really like how simple and quick the services are, and I would love to have a discussion with you to explain why and how we provide the service. Thank you for the great work you do!</p>
                    <p id="testimonal3" className={` ${p1active===3 ? "block" :"hidden"} testmonal  ${styles.heroSubText} `}>I've beenes are, and I would love to have a discussion with you to explain why and how we provide the service. Thank you for the great work you do!</p>
                    <p id="testimonal4" className={ `${p1active===4 ? "block" :"hidden"} testmonal  ${styles.heroSubText} `}>I've been using this site since it came out! I really like how simple and quick the services are, and I would love to have a discussion with you to explain why and how we provide the service. Thank you for the great work you do!</p>

                </div>
            </div>
        </section>
    )
}

export default Testimonals
