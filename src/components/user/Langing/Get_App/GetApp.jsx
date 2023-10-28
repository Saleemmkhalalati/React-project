import React from 'react'
import { styles } from '../Stayles'
import DocterImage from './Get_App_images/Intersect.png'

const GetApp = () => {
    return (
        <section className={`GetApp_section   overflow-hidden ${styles.padding} relative   flex justify-end `}>
             <div className=' absolute left-0 bottom-0  lg:visible'>
                    {/* rectangle border */}
                    <div className={`${styles.border_graident}  ${styles.Rectangle_border}  invisible lg:visible  absolute left-[-10px] top-[50px] lg:left-[-30px] lg:top-[100px] w-[200px] h-[200px] lg:w-[273px] lg:h-[273px] rounded-[16px] `}>
                        <div className="bg-white w-full h-full">

                        </div>
                    </div>
                    {/* rectangle image */}
                    <div className={` relative ${styles.Rectangle_image}  invisible lg:visible z-20 lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] w-[250px] h-[250px]  lg:left-10  `}>
                        <div style={{ backgroundImage: `url(${DocterImage})` }} className={` absolute bottom-0 left-[50%] translate-x-[-50%] img-landing-page bg-no-repeat bg-cover bg-center lg:w-[360px] lg:h-[400px] md:w-[250px] md:h-[250px] w-[200px] h-[200px]  `} >
                        </div>
                    </div>
                </div>
            <div className='flex items-center justify-center flex-col md:flex-row  gap-0  '> 
                {/* get app image */}
               
                {/* get app content */}

                <div className='content flex flex-col  relative p-10  lg:w-[1127px] lg:h-[360px]   bg-[#2bc1f70d]    justify-center items-center text-center rtl:lg:end-[300px]     '>
            
                    <h1 className={`${styles.heroHeadText} z-10 opacity-100   `}>Let ‘s Strive For a More happy Life With Med - Sal </h1>
                    <p className={`${styles.heroSubText} `}>This is achieved through access to your treatment and service faster and smoother than before.</p>
                    <button className='rounded-[5px] grident w-[177px] h-[31px] py-[3px] px-[8px] opacity-[.8px] text-white '>So, Let’s Started</button>
                    
                  
                </div>
              
            </div>

        </section>
    )
}




export default GetApp
