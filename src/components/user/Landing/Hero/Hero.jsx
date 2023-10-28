import React from 'react'
import './Hero.css'
import { styles } from '../Stayles'
import vector from './Hero_images/Vector.svg'
import DocterImage from './Hero_images/Doctor_Image.png'

const Hero = () => {
  return (
    <section className={`relative  overflow-hidden mt-10 `}>

      {/* rectangle background  */}
      <div className="flex flex-col  lg:flex-row   justify-between items-center relative h-screen w-screen">
        <div className={`${styles.Rectangle} absolute lg:right-[-10px] lg:top-44  right-0 top-7  `}>

        </div>
        <div className={`${styles.Rectangle} absolute  lg:left-[-100px] lg:bottom-44 bottom-10 left-0`}>

        </div>
      </div>
      {/*  Landing Image + content  */}
      <div className={` absolute ${styles.padding} top-1 flex flex-col-reverse lg:flex-row justify-between  gap-28 md:gap-20 lg:gap-0 h-full items-center  `}>
        {/* content */}
        <div className='content flex flex-col lg:w-[55%] text-left relative'>
          <span className='text-grindent mb-5'>Welcome to Med - sal <img src={vector} alt="" className=' w-[20px] h-[20px] inline-block ' /></span>
          <h1 className={`${styles.heroHeadText}`}>Get The Best Health Care Services For a More Comfortable Life.</h1>
          <p className={`${styles.heroSubText} `}>Don't let illness or ill health sneak up on you. So, get our health services, and get your most up-to-date health information form in over 155,000 compatible and clinically verified medical journals.</p>
          <div className={`${styles.border_graident}  w-[171px] h-[46px] rounded-[5px relative left-2`}>
            <div className="bg-white w-full h-full">

            </div>
          </div>
          <button className='rounded-[5px] grident w-[171px] h-[46px] text-white absolute bottom-2 '>So, Let’s Started</button>

        </div>
        {/* hero image  */}
        <div className='Hero-image   '>
          <span className='text-success  rtl:start-[60%] absolute top-[40%] right-0 z-10 text-[16px] bg-white font-bold px-[16px] py-[8px] rounded-[8px]'>High-Quality Dental Care</span>
          <div className={`  ${styles.Rectangle_grident} lg:w-[350px] lg:h-[350px] md:w-[250px] md:h-[250px] w-[200px] h-[200px] mr-10`}>
          </div>

          <div className={`rtl:start-[10%] rtl:md:start-[32%] rtl:lg:start-[65%]  absolute  ${styles.Rectangle_image}  lg:w-[450px] lg:h-[450px] md:w-[300px] md:h-[300px] w-[250px] h-[250px] right-8 top-0 md:right-72 md:top-5 lg:right-5 lg:top-36`}>
            <div style={{ backgroundImage: `url(${DocterImage})` }} className={` absolute bottom-0 left-[50%] translate-x-[-50%] img-landing-page bg-no-repeat bg-cover bg-center lg:w-[200px] lg:h-[350px] w-[120px] h-[200px]  `} >
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
export default Hero
