export default function Checkbox({ label, value, onChange })
 {
    return (

       
     
          
        <label className="border-solid ml-2 flex items-center gap-2 text-[13px] font-normal text-myGray-500 leading-[20px]">
        <input type="checkbox" checked={value} onChange={onChange} className="  border-[1px] border-solid border-myGray-500 opacity-[70%]  rounded-full " />
        {label}
      </label>
       
      );

}
import PropTypes from "prop-types";
Checkbox.propTypes = {
  
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};