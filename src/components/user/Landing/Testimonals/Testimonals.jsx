import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import BackPolygon from '../../../utilities/BackPolygon';
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
        <section className={`testimonals_section overflow-hidden  relative   sm:px-16 px-6 sm:py-36 py-10`}>





            <div className="flex flex-col lg:flex-row justify-around items-center py-10 ">
                <div className="testimonals_images  mt-20   ">
                    <div className='mt-10 '>
                        {/* testimonals 2 +4 */}
                        <div className={`flex  row-image gap-14  rtl:translate-x-0 rtl:w-full  md:gap-24 lg:gap-20 lg:justify-between cursor-pointer w-[450px] lg:translate-x-2 md:translate-x-1 md:mt-2  md:translate-y-5 lg:translate-y-0  translate-y-[-100px] translate-x-[110px] rtl:md:translate-y-[1px]`}>

                            {/* t4 */}
                            <div onClick={() => { showInfo(4) }} className={` z-10 rotate-[46deg]   bg-myGray-100 w-[100px] h-[100px]  md:w-[200px] md:h-[200px]  lg:w-[200px] lg:h-[200px] rounded-[5px]  ${pactive !== 4 ? "opacity-[25%]  grident" : " scale-110 grident !opacity-[80%]"} `}>
                                <div className="  w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_4}`} alt="" className={`rotate-[-45deg] md:w-[200px] md:h-[200px]  absolute md:bottom-[-25px] left-5 ${pactive === 4 ? "" : ""}  `} />
                                    < p className=' z-20 text-white rotate-[-40deg] w-full text-center   text-[12px] md:w-[60%] absolute lg:left-[40%] lg:bottom-[20%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Eleanor Pena</p>


                                </div>
                            </div>










                            {/* t2 */}
                            <div onClick={() => { showInfo(2) }} className={` bg-myGray-100  w-[100px] h-[100px]  z-10 rotate-[46deg] md:w-[180px] md:h-[180px]  lg:w-[180px] lg:h-[180px] rounded-[5px]  ${pactive !== 2 ? "opacity-[25%]  z-10 grident" : " scale-110   grident !opacity-[80%]"}`}>
                                <div className=" opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_2}`} alt="" className='rotate-[-45deg] md:w-[200px] md:h-[220px] absolute bottom-[-38px] md:left-0  left-4  ' />
                                    < p className=' z-20 text-white rotate-[-45deg] w-full   text-[12px] md:w-[70%] absolute lg:left-[25%] lg:bottom-[30%] md:left-[50%]    left-1 bottom-10 md:text-[16px]'>Jackie Prankline</p>


                                </div>
                            </div>
                        </div>
                        {/* testmonals 1+3 */}

                        <div className={`flex col-iamge  lg:gap-[100px]    md:gap-24 rotate-[90deg]  gap-12  lg:translate-y-[-190px] translate-y-[-100px]  md:translate-y-[-180px] cursor-pointer translate-x-3 rtl:translate-y-[-200px] rtl:translate-x-[-2px] rtl:md:translate-x-[-10px] rtl:md:gap-24`}>
                            {/* t1 */}
                            <div onClick={() => { showInfo(1) }} className={` bg-myGray-100    z-10 rotate-[46deg]   w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[180px] lg:h-[180px] rounded-[5px]    ${pactive !== 1 ? "!opacity-[25%]  z-10 grident" : " scale-110 grident !opacity-[80%]"}`}>
                                <div className="  opacity-[100%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_1}`} alt="" className='rotate-[-140deg]  md:w-[500p] md:h-[380px] absolute md:bottom-[-50px] md:left-12 bottom-0 left-5 ' />
                                    < p className=' z-20 text-white rotate-[-135deg] w-full  text-[12px] md:w-[80%] absolute  text-center lg:left-[30%] lg:bottom-[60%] md:left-[50px] md:bottom-24   left-1 bottom-10 md:text-[16px]'>One of the pioneers of the site</p>
                                    <span className='rotate-[-135deg]  absolute z-20 font-[700] md:text-[20px] lg:bottom-[60%] lg:right-[5px] text-[12px] right-[-25px] bottom-[60px] md:right-[-2px]  md:bottom-20 text-center  w-full'>Vanessa Bond</span>

                                </div>
                            </div>
                            {/* t3 */}

                            <div onClick={() => { showInfo(3) }} className={`bg-myGray-100    z-10 rotate-[46deg]   w-[100px] h-[100px]  md:w-[180px] md:h-[180px]  lg:w-[180px] lg:h-[180px] rounded-[5px] ${pactive !== 3 ? "opacity-[25%] grident" : " scale-110 grident !opacity-[80%]"} `}>
                                <div className=" opacity-[60%] w-full h-full relative overflow-hidden">
                                    <img src={`${testmonal_3}`} alt="" className='rotate-[-130deg] md:w-[250px] md:h-[200px]  absolute lg:bottom-[-8px]  right-[-20px] z-20   ' />
                                    < p className=' z-20 text-white rotate-[-135deg] w-full  text-[12px] lg:w-[75%] absolute lg:left-[30%] lg:bottom-[60%] md:bottom-24 right-[-20%]  bottom-16 md:text-[16px] text-center '>Jhon Brown</p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="testimonals_content md:mt-10 mt-0 w-full flex flex-col text-left lg:w-1/2  ">


                    <Typography component={"h1"} className="mb-10" >
                    {t("testimonals.main_title")}
                    </Typography>



                    
                    
                    <Typography component={"p"} id="testimonal1" className={`${pactive === 1 ? "block" : "hidden"} testmonal   `}>  {t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal2" className={` ${pactive === 2 ? "block" : "hidden"} testmonal   `}>{t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal3" className={` ${pactive === 3 ? "block" : "hidden"} testmonal   `}>{t("testimonals.testimonal")}</Typography>
                    <Typography component={"p"} id="testimonal4" className={`${pactive === 4 ? "block" : "hidden"} testmonal  } `}>{t("testimonals.testimonal")}</Typography>
                    <span className=' text-right text-[#FAA209] font-bold text-[16px]'>Vanessa Bond</span>
                </div>

            </div>
            <div className='absolute lg:right-0 lg:top-[30%] md:top-[60%] md:right-[60%] hidden md:block rtl:lg:right-[80%]  '>
                <BackPolygon />
            </div>

        </section>
    )
}

export default Testimonals
