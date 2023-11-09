import mini_menu from "../../assets/icons/mini-menu.svg"


export default function TabsFillter({ 
    

    children
})
 {
    return (
        
        <div className='flex justify-between bg-blac flex-wrap bg-slate-60  sm:p-5 p-2 gap-5 '>
                <div className='flex gap-5 flex-wrap w-full sm:w-[70%]'>


                   {children}

                </div>

                <div className='flex justify-end w-[50%] sm:w-[20%]   items-center  '>
                <p className="w-[80%]  sm:w-[60%] font-normal opacity-[70%] text-[13px] ">Edited 27.10.2023 10:34</p>
                <img src={mini_menu} alt=""  className="w-[1rem] h-[1rem] opacity-[70%]"/>
                </div>
        </div>
       
      );

}
import PropTypes from "prop-types";
TabsFillter.propTypes = {
  
    children: PropTypes.string,

};