
import { useRef, useState } from "react";
import arrowIcon from "../../assets/icons/arrowDropdown.svg";




export default function Dropdown({ 
    

    value,
    options,
    onChange 
})

 {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(options[0]);






    return (
  

       
     
          
     
        <div className="curser-pointer   border-2 border-solid border-myGray-200 flex focus:border-primary   justify-between  " >
              <select value={value} onChange={onChange} className="sm:px-2 sm:py-1  sm:w-[12rem] w-[8rem]  bg-transparent uppercase leading-normal transition duration-150 ease-in-out  ">
     
     {options.map((option) => (

       <option value={option.value} className="text-left hover:bg-myGray-100   active:bg-myGray-100 hover:text-secondary active:text-secondary">{option.value}</option>

     ))}

   </select>
        </div>



     
       
      );

}
import PropTypes from "prop-types";
Dropdown.propTypes = {
  
    value: PropTypes.string,
    options: PropTypes.string,
    onChange: PropTypes.func,
};
