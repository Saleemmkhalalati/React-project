import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import BackPolygon from '../../../utilities/BackPolygon';
import Polygon from "../../../utilities/Polygon"
import Typography from "../../../utilities/Typography"
import testmonal_2 from './Testimonals_images/Testaimonals _1.png'
import testmonal_3 from './Testimonals_images/Testaimonals_2.png'
import testmonal_4 from './Testimonals_images/Testaimonals_3.png'
import testmonal_1 from './Testimonals_images/Testaimonals_4.png'



const Testimonals = () => {
    const [pactive, setpactive] = useState(1)
    const { t } = useTranslation("global");




    const showInfo = (devId) => {


        setpactive(devId)

    }
    return (
        <section className={`testimonals_section overflow-hidden  relative   sm:px-16 px-6 sm:py-36 py-10  `}>
            <div className="flex flex-col xl:flex-row    justify-between items-center  py-10 gap-5 h-full ">
                {/* testimonals images */}
                <div className="testimonals_images flex  items-center justify-around relative    h-[30rem] w-[50%]">
                    {/* 2 + 4 */}
                    <div className={`flex  row-image justify-  sm:gap-24  gap-[3rem] items-center  cursor-pointer  `}>

                        {/* t4 */}
                        {/* <div onClick={() => { showInfo(4) }} className={` z-10 rotate-[46deg] red   bg-myGray-100 w-[100px] h-[100px]  md:w-[200px] md:h-[200px]  lg:w-[200px] lg:h-[200px] rounded-[5px]  ${pactive !== 4 ? "opacity-[25%]  grident" : " scale-110 grident !opacity-[80%]"} `}>
                            <div className="  w-full h-full relative overflow-hidden">
                                <img src={`${testmonal_4}`} alt="" className={`rotate-[-45deg] md:w-[200px] md:h-[200px]  absolute md:bottom-[-25px] left-5 ${pactive === 4 ? "" : ""}  `} />
                                < p className=' z-20 text-white rotate-[-40deg] w-full text-center   text-[12px] md:w-[60%] absolute lg:left-[40%] lg:bottom-[20%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Eleanor Pena</p>


                            </div>
                        </div> */}

                      {/* t4 */}
                     <div onClick={() => { showInfo(4) }} className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem]  ${pactive !== 4 ? "  " : " scale-110 !z-50"}`}>
                     <Polygon color={"gradient"} className={"w-full h-full  top-0 p-1 z-10"}>
                     <Polygon color={"gray"} className={"w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden"}>
                     <img src={`${testmonal_4}`} alt="" className={` w-[100%] h-full rotate-[-130deg] absolute top-[-15%] lg:left-[10%]  `} />
                     <Polygon color={"gradient"} className={`w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden opacity-[25%] ${pactive !== 4 ? "  " : "!opacity-[75%]"}`}>
                    < p className=' z-20 text-white rotate-[138deg] w-full text-center  font-bold leading-9  text-[16px] md:w-[60%] absolute lg:left-0 lg:-bottom-[-70%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Eleanor Pena</p>

                     </Polygon>
                      </Polygon>

                        </Polygon>
                     </div>
                     {/* t2 */}
                    
                     <div onClick={() => { showInfo(2) }} className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem] ${pactive !== 2 ? "  " : " scale-110 !z-50"} `}>
                     <Polygon color={"gradient"} className={"w-full h-full  top-0 p-1 z-10"}>
                     <Polygon color={"gray"} className={"w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden"}>
                     <img src={`${testmonal_2}`} alt="" className={` w-[100%] h-full rotate-[-130deg] absolute top-[-15%] lg:left-[10%]     `} />
                     <Polygon color={"gradient"} className={`w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden opacity-[25%] ${pactive !== 2? "  " : "!opacity-[75%]"}`}>
                    < p className=' z-20 text-white rotate-[138deg] w-full text-center  font-bold leading-9  text-[16px] md:w-[60%] absolute lg:left-0 lg:-bottom-[-60%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Jackie Prankline</p>

                     </Polygon>
</Polygon>

                        </Polygon>
                     </div>
                


                    
                        {/* <Polygon color={"gradient"} className={" w-[13rem] h-[13rem] red "}>
kkkkk

                        </Polygon> */}







                        {/* t2 */}
                        {/* <div onClick={() => { showInfo(2) }} className={` bg-myGray-100  w-[100px] h-[100px]  z-10 rotate-[46deg] md:w-[180px] md:h-[180px]  lg:w-[180px] lg:h-[180px] rounded-[5px]  ${pactive !== 2 ? "opacity-[25%]  z-10 grident" : " scale-110   grident !opacity-[80%]"}`}>
                            <div className=" opacity-[60%] w-full h-full relative overflow-hidden">
                                <img src={`${testmonal_2}`} alt="" className='rotate-[-45deg] md:w-[200px] md:h-[220px] absolute bottom-[-38px] md:left-0  left-4  ' />
                                < p className=' z-20 text-white rotate-[-45deg] w-full   text-[12px] md:w-[70%] absolute lg:left-[25%] lg:bottom-[30%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Jackie Prankline</p>


                            </div>
                        </div> */}
                    </div>
                    {/* 1 +3 */}
                    <div className={`flex col-iamge      rotate-[90deg] sm:gap-24 gap-[3rem] absolute md:start-[1%] xl:start-[13%]    cursor-pointer  rtl:translate-y-[-200px] rtl:translate-x-[-2px] rtl:md:translate-x-[-10px] rtl:md:gap-24`}>
                        {/* t1 */}
                      
                           <div onClick={() => { showInfo(1) }} className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem]  ${pactive !== 1 ? "  " : " scale-110 !z-50"}`}>
              
                     <Polygon color={"gradient"} className={"w-full h-full  top-0 p-1 z-10"}>
                     <Polygon color={"gray"} className={"w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden"}>
                     <img src={`${testmonal_1}`} alt="" className={` w-[100%] h-full rotate-[130deg] absolute top-[-15%] lg:right-[10%]     `} />
                     <Polygon color={"gradient"} className={`w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden opacity-[25%] ${pactive !== 1 ? "  " : "!opacity-[75%]"}`}>
                    < p className=' z-20 text-white rotate-[45deg] w-full text-center  font-bold   text-[16px] md:w-[70%] absolute lg:left-[-5%] lg:-bottom-[-10%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>One of the pioneers of the site</p>
                    <span className='rotate-[45deg]  absolute z-20 font-[700] md:text-[20px] lg:bottom-[30%] lg:right-[5px] text-[12px] right-[-25px] bottom-[60px] md:right-[-2px]  md:bottom-20 text-center  w-full'>Vanessa Bond</span>

                     
                     </Polygon>
                  </Polygon>

                        </Polygon>
                          </div>


                        {/* t3 */}
                        <div onClick={() => { showInfo(3) }} className={`relative sm:w-[13rem] sm:h-[13rem] w-[7rem] h-[7rem] ${pactive !== 3 ? "  " : " scale-110 !z-50"}`}>
                     <Polygon color={"gradient"} className={"w-full h-full  top-0 p-1 z-10"}>
                     <Polygon color={"gray"} className={"w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden"}>
                     <img src={`${testmonal_3}`} alt="" className={` w-[100%] h-full rotate-[140deg] absolute top-[-15%] lg:right-[10%]   `} />
                     <Polygon color={"gradient"} className={`w-[100%] h-[100%] ltr:rotate-[90deg] overflow-hidden opacity-[25%] ${pactive !== 3 ? "  " : "!opacity-[75%]"}`}>
                     < p className=' z-20 text-white rotate-[45deg] w-full text-center  font-bold   text-[16px] md:w-[70%] absolute lg:left-[-5%] lg:-bottom-[-20%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Jhon Brown    </p>
                     </Polygon>
                  </Polygon>

                        </Polygon>
                          </div>

                      
                    </div>



                </div>



                {/* testimonals content */}
                <div className="testimonals_content md:mt-10 mt-0 w-full flex flex-col text-left lg:w-[40%]    ">


                    <Typography component={"h1"} className="mb-5" >
                        {t("testimonals.main_title")}
                    </Typography>





                    <Typography component={"p"} id="testimonal1" className={`${pactive === 1 ? "block" : "hidden"} testmonal   `}>  {t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal2" className={` ${pactive === 2 ? "block" : "hidden"} testmonal   `}>{t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal3" className={` ${pactive === 3 ? "block" : "hidden"} testmonal   `}>{t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal4" className={`${pactive === 4 ? "block" : "hidden"} testmonal  } `}>{t("testimonals.testimonal")}</Typography>
                    <span className=' text-right text-[#FAA209] font-bold text-[16px] mt-5'>Vanessa Bond</span>
                </div>

            </div>
            <div className='absolute lg:right-0 lg:top-[30%] md:top-[60%] md:right-[60%] hidden md:block rtl:lg:right-[80%]  '>
                <BackPolygon />
            </div>

            
          

        </section>
    )
}

export default Testimonals
