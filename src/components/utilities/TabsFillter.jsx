import mini_menu from "../../assets/icons/mini-menu.svg"


export default function TabsFillter({ 
    

    children
})
 {
    return (
        
        <div className='flex justify-between flex-col-reverse sm:flex-row flex-wrap bg-slate-60  sm:p-5 p-2 gap-5 border-b-2 border-solid border-myGray-200 '>
                <div className='flex gap-5 flex-wrap w-full sm:w-[70%]'>


                   {children}

                </div>

                <div className='flex justify-end  gap-3  items-center   '>
                <p className="  font-normal opacity-[70%] text-[13px] ">Edited 27.10.2023 10:34</p>
                <img src={mini_menu} alt=""  className="w-[1rem] h-[1rem] opacity-[70%]"/>
                </div>
        </div>
       
      );

}
import PropTypes from "prop-types";
TabsFillter.propTypes = {
  
    children: PropTypes.string,

};